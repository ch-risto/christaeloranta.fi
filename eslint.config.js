import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // Globaalit sivuutussäännöt
  // Huom: Tämän täytyy olla oma objektinsa heti arrayn alussa,
  // jotta se vaikuttaa globaalisti kaikkiin myöhempiin sääntöihin.
  {
    ignores: [
      ".astro/**", // Astron generoimat tyypit
      "dist/**", // Käännetty tuotantokoodi
      "node_modules/**", // Riippuvuudet
      ".vercel/**", // Vercelin mahdolliset lokaalit välimuistit
    ],
  },

  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Tähän voit lisätä omia sääntöjäsi myöhemmin
      // 'no-console': 'warn',
    },
  },
];
