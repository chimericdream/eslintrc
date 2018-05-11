/* global module */

const warningComments = (() => {
    const base = ['fix', 'todo', 'fixme', 'research', 'xxx'];

    return base.concat(base.map(item => `@${ item }`));
})();

module.exports = {
    'accessor-pairs': ['error', {
        'setWithoutGet': true,
        'getWithoutSet': false,
    }],
    'array-callback-return': 'warn',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'warn',
    'complexity': ['warn', {'max': 10}],
    'consistent-return': ['error', {'treatUndefinedAsUnspecified': false}],
    'curly': ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always'],
    'guard-for-in': 'warn',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', {'allowElseIf': false}],
    'no-empty-function': ['error', {'allow': ['arrowFunctions', 'constructors']}],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': ['error', {'allowIndirect': false}],
    'no-extend-native': ['error', {'exceptions': []}],
    'no-extra-bind': 'error',
    'no-extra-label': 'warn',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {'exceptions': []}],
    'no-implicit-coercion': ['error', {
        'boolean': true,
        'number': true,
        'string': true,
        'allow': [],
    }],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',

    // see babel/no-invalid-this
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', {'allowLoop': true, 'allowSwitch': true}],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {
        'ignore': [-1, 0, 1],
        'ignoreArrayIndexes': true,
        'enforceConst': true,
        'detectObjects': true,
    }],
    'no-multi-spaces': ['error', {'exceptions': {}}],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {'props': false}],
    'no-proto': 'error',
    'no-redeclare': ['error', {'builtinGlobals': true}],
    'no-restricted-properties': [
        'error',
        {'object': '_', 'property': 'extend', 'message': 'Use Object.assign instead'},
        {'object': 'require', 'message': 'Call require() directly'},
        {'property': '__defineGetter__', 'message': 'Use Object.defineProperty instead'},
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': ['warn', {'props': true}],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'warn',

    // see babel/no-unused-expressions
    'no-unused-expressions': 'off',
    'no-unused-labels': 'warn',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-warning-comments': ['warn', {
        'terms': warningComments,
        'location': 'start',
    }],
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'radix': ['error', 'always'],
    'require-await': 'warn',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside', {'functionPrototypeMethods': true}],
    'yoda': ['error', 'never', {'exceptRange': true}],
};