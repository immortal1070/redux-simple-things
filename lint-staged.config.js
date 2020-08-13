module.exports = {
  '*.!config.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix --max-warnings 0']
}
