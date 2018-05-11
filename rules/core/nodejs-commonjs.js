/* global module */

const restrictedModules = [
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'freelist',
    'module',
    'net',
    'os',
    'punycode',
    'readline',
    'repl',
    'smalloc',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tracing',
    'tty',
    'vm',
    'zlib',
];

module.exports = {
    'callback-return': ['error', [
        'callback',
        'cb',
        'done',
        'error',
        'next',
        'success',
    ]],
    'global-require': 'error',
    'handle-callback-err': ['error', '^.*(e|E)rr'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': ['error', {
        'allowCall': true,
        'grouping': false,
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': ['error'].concat(restrictedModules),
    'no-sync': ['error', {'allowAtRootLevel': true}],
};