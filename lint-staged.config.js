module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.css': ['stylelint --fix --allow-empty-input'],
  '*.{json,md}': ['prettier --write'],
};
