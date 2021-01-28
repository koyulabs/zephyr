module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [(message) => message.includes('WIP')],
  rules: {
    'body-max-line-length': [0, 'always', Infinity], // added this due to semantic release bug
  },
};