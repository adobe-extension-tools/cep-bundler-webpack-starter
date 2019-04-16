import dispatch from './bridge'

function _log(args: any[], type: string) {
    var safeArgs = args.map((arg) => {
        try {
            JSON.stringify(arg);
            if (Array.isArray(arg)) {
                return arg
            }
            if (typeof arg === 'object') {
                return Object.keys(arg).reduce((memo: any, key: string) => {
                    if (typeof arg[key] === 'function') {
                        memo[key] = `[function ${arg[key].name}]`
                        return memo
                    }
                    if (typeof arg[key] === 'undefined') {
                        memo[key] = '[undefined]'
                        return memo
                    }
                    memo[key] = arg[key]
                    return memo
                }, {})
            }
            return arg;
        } catch (e) {
            return arg.toString();
        }
    });
    dispatch('CONSOLE_' + type, JSON.stringify(safeArgs));
}

function logConsole(...args: any[]) {
    _log(args, 'LOG');
}

function logError(...args: any[]) {
    _log(args, 'ERROR');
}

function logWarning(...args: any[]) {
    _log(args, 'WARN');
}

export default {
    log: logConsole,
    error: logError,
    warn: logWarning
};