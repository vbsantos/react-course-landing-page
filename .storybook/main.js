module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/Components/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
  ],
};
