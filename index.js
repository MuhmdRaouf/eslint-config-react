// eslint-disable-next-line import/no-commonjs, no-undef
module.exports = {
  extends: '@muhmdraouf/eslint-config',
  plugins: ['react', 'react-hooks'],
  rules: { 'react/prop-types': ['error', { ignore: ['children'] }] },
};
