'use strict'

const processRunner = require('./../bin/process-runnnner')
const paths = require('../config/paths')

const isWatch = process.argv.find(arg => arg === '--watch')

process.env.BM_NODE_PATH = paths.appNodeModules

processRunner.run(require.resolve('eslint/bin/eslint'), [
  //with this option (no-eslintrc) linter config file will not be searched in the bm-ui folder.
  //if not set, then .eslintrc.json from bm-ui will be used used
  '--config',
  require.resolve(`./../.eslintrc.js`),
  paths.appSrc,
  '--ext',
  '.js,.ts',
])

processRunner.run(require.resolve('@babel/cli/bin/babel'), [
  '--source-maps',
  '--sourceMaps=both',
  '--copy-files',
  ...(isWatch ? ['--watch'] : []),
  ...(isWatch ? ['--verbose'] : []),
  '--config-file=' + require.resolve('./../babel.config.js'),
  '--no-babelrc',
  '--extensions',
  '.ts,.tsx,.js,.jsx',
  '--sourceRoot=' + paths.appSrc,
  '--ignore=*.test.js',
  '--out-dir',
  paths.appBuild,
  paths.appSrc
])
