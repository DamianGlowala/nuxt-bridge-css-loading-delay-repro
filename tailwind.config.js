export default ({ srcDir }) => ({
  content: [
    `${srcDir}/pages/**/*.vue`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
