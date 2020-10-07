'use strict'

const processRunner = require('./../bin/process-runnnner')
const paths = require('../config/paths')

const isWatch = process.argv.find(arg => arg === '--watch')

process.env.BM_NODE_PATH = paths.appNodeModules

processRunner.run(require.resolve('eslint/bin/eslint'), [
  '--config',
  require.resolve(`./../.eslintrc.js`),
  paths.appSrc,
  '--ext',
  '.js,.ts',
])

processRunner.run(require.resolve('@babel/cli/bin/babel'), [
  '--source-maps',
  '--copy-files',
  ...(isWatch ? ['--watch'] : []),
  ...(isWatch ? ['--verbose'] : []),
  '--config-file=' + require.resolve('./../babel.config.js'),
  '--no-babelrc',
  '--extensions',
  '.ts,.tsx,.js,.jsx',
  '--ignore=*.test.js',
  '--out-dir',
  paths.appDist,
  paths.appSrc
])

processRunner.run(require.resolve('typescript/bin/tsc'), [
  '--project',
  'tsconfig.types.json',
])
