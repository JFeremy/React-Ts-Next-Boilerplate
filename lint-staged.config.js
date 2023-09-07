module.exports = {
  '*.{ts,tsx}': ['yarn lint:fix', 'eslint'],
  '**/*.ts?(x)': () => 'yarn typecheck',
  '*.{json,yaml}': ['prettier --write'],
};
