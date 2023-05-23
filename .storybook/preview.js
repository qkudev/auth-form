// import '../src/styles/variables.css';
import '../src/styles/globals.css';
// import '../src/styles/typography.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
