/**
 * maps cli arguments names to the JS object field names
 * later one can use JS fields in the configs, etc.
 *
 * e.g. when in command line one passes "copy-public-folder=true" the args js object will hold
 * "copyPublicFolder: true" field.
 *
 * true/false values are converted to boolean type
 */
const cliArgsToArgsFieldsMapping = {
  ['watch']: 'watch',
}

/**
 * Default values of JS object which represents process args
 *
 * Can be overriden with values from CLI (see cliArgsToArgsFieldsMapping)
 */
const defaultArgs = {
    watch: false
}

/**
 * holds fields and values which were passed from CLI
 * if some sub processes will be call this object is used to pass the CLI params down to the sub process
 *
 * format:
 * [cli arg name]: string value
 * e.g.  ['copy-public-folder']: 'true',
 */
const argsFromCli = {
}

/**
 * Parses arg (e.g. "copy-public-folder=true") and returns name - e.g. "copy-public-folder"
 */
const getCliArgName = (arg) =>
  arg.includes('=') && arg.substr(0, arg.indexOf('='))

/**
 * Parses arg (e.g. "copy-public-folder=true") and returns field name for JS object - e.g. "copyPublicFolder"
 */
const getMappedField = (arg) =>
    arg.includes('=') && cliArgsToArgsFieldsMapping[getCliArgName(arg)]

/**
 * Parses arg (e.g. "copy-public-folder=true") and returns value - e.g. "true"
 */
const getArgValue = (arg) => {
  return arg.substr(arg.indexOf('=') + 1, arg.length)
}

/**
 * Processes arg value to be set in JS object
 */
const processArgValue = (argValue) => {
    switch (argValue) {
        case 'true':
            return true
        case 'false':
            return false
        default:
            return argValue
    }
}

/**
 * Writes values from process.argv into the passed object
 * @param defaultArgs - object which will get values from process.argv
 * @returns {*} - object which holds joined defaultArgs and process values
 */
const writeProcessArgs = (defaultArgs) => {
  const argsWithProcessArgs = {...defaultArgs}
  process.argv.forEach((arg) => {
      const mappedFieldName = getMappedField(arg)
      if (mappedFieldName) {
        const stringArgValue = getArgValue(arg)
        argsFromCli[getCliArgName(arg)] = stringArgValue
        argsWithProcessArgs[mappedFieldName] = processArgValue(stringArgValue)
      }
    }
  )
  return argsWithProcessArgs
}

/**
 * if CLI args are present, then values in array are replaced with CLI values
 */
const addCliArgsToScriptArgs = (defaultArgsArray) => {
  const notDefautArgs = {...argsFromCli}

  const defaultWithCli = defaultArgsArray.map((arg) => {
    const argName = getCliArgName(arg)
    if (argName && argsFromCli[argName]) {
      delete notDefautArgs[argName]
      return `${argName}=${argsFromCli[argName]}`
    }
    return arg
  })
  const notDefaultArgsArray = Object.keys(notDefautArgs)
    .map((notDefaultArg) => `${notDefaultArg}=${notDefautArgs[notDefaultArg]}`)

  return [...defaultWithCli, ...notDefaultArgsArray]
}


module.exports = {
  /**
   * holds all args (including default ones)
   */
  args: writeProcessArgs(defaultArgs),
  addCliArgsToScriptArgs: addCliArgsToScriptArgs
}
