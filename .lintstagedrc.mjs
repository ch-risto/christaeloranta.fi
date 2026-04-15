export default {
  // Kohdistetaan Prettier lähes kaikkeen tekstiin
  "*.{js,ts,jsx,tsx,astro,json,md,yml,yaml}": [
    "prettier --write --plugin=prettier-plugin-astro",
  ],
  // Kohdistetaan ESLint vain kooditiedostoihin
  "*.{js,ts,jsx,tsx,astro}": ["eslint --fix"],
};
