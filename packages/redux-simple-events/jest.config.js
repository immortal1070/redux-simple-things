const jestConfig = require('../../jest-shared.config')

jestConfig.moduleNameMapper["redux-simple-events"] = './src'

module.exports = jestConfig
