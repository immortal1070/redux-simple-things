#!/usr/bin/env node

'use strict'

var crossSpawn = require('cross-spawn')

const runNode = (script, scriptArgs) => {
    let nodeArgs = [script].concat(scriptArgs)

    console.log('Starting child process: node ' + nodeArgs)
    const result = crossSpawn.sync('node', nodeArgs, {stdio: 'inherit'})
    if (result.signal) {
        if (result.signal === 'SIGKILL') {
            console.log(
                'The build failed because the process exited too early. ' +
                    'This probably means the system ran out of memory or someone called ' +
                    '`kill -9` on the process.'
            )
        } else if (result.signal === 'SIGTERM') {
            console.log(
                'The build failed because the process exited too early. ' +
                    'Someone might have called `kill` or `killall`, or the system could ' +
                    'be shutting down.'
            )
        }
        process.exit(1)
    }
    // console.log("Result signal: " + result.signal + ", status: " + result.status + ", error: " + result.error)

    if (result.status !== 0) {
        process.exit(result.status)
    }
    // on ok we can chain
    return result
}

module.exports = {
    run: runNode
}
