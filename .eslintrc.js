// airbnb-typescript-prettier is used, see article
// https://itnext.io/how-to-setup-typescript-eslint-prettier-and-react-in-5-minutes-44cfe8af5081

const prettierConfig = require('./prettier.config')

module.exports = {
  extends: ['airbnb-typescript-prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: [
    'ramda',
    'promise',
    'jest',
    'prettier',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
        usePrettierrc: false
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
      }
    ],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'import/order': 'off',
    'consistent-return': 0,
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref']
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': ['warn', {ignoreNonDOM: true}],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/scope': 'warn',
    'import/prefer-default-export': 'off'
  }
}
