/* global module */

module.exports = {
    'init-declarations': ['error', 'always'],
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-shadow': [
        'error',
        {
            allow: [
                'resolve',
                'reject',
                'done',
                'cb',
                'callback',
            ],
            builtinGlobals: true,
            hoist: 'all',
        },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', {'typeof': true}],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
        'error',
        {
            args: 'after-used',
            caughtErrors: 'all',
            ignoreRestSiblings: true,
            vars: 'all',
        },
    ],
    'no-use-before-define': [
        'error',
        {
            classes: true,
            functions: true,
            variables: true,
        },
    ],
};