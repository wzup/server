module.exports = {
    env: {
        es6: true,
        node: true
    },
    // 'extends': 'eslint:recommended',
    rules: {
        indent: [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 1
            }
        ],
        'linebreak-style': [ 'error', 'unix' ],
        quotes: [ 'error', 'single' ],
        semi: [ 'warn', 'always' ],
        'no-console': [ 'warn', { 'allow': [ 'info' ] } ],
        'no-debugger': 'error',
        strict: 'error',
        'no-use-before-define': [ 'warn', { functions: false, classes: true, variables: true } ],
        'no-unused-vars': [ 'warn', { 'argsIgnorePattern': 'resolve|reject|next|err|error' } ],
        'no-multi-spaces': 'warn',
        'no-global-assign': 'error',
        'no-empty': 'error',
        'no-duplicate-case': 'error',
        'max-params': [ 'warn', 4 ],
        'no-dupe-args': 'error',
        'no-caller': 'error',
        'no-extra-bind': 'warn',
        'no-restricted-globals': 'warn',
        'comma-spacing': 'warn',
        'computed-property-spacing': [ 'warn', 'always' ],
        'space-infix-ops': 'warn',
        'space-in-parens': [ 'warn', 'always' ],
        'space-before-function-paren': ['error', 'never'],
        'func-call-spacing': [ 'error', 'never' ],
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [ 'warn', 'below' ],
        'object-curly-spacing': [ 'warn', 'always' ],
        'arrow-parens': [ 'warn', 'always' ],
        'no-var': 'warn'
    }
};