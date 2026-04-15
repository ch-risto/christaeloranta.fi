# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                           |
| :------------------------------- | :----------------------------------------------- |
| `npm install`                    | Installs dependencies                            |
| `npm run dev`                    | Starts local dev server at `localhost:4321`      |
| `npm run build`                  | Build your production site to `./dist/`          |
| `npm run preview`                | Preview your build locally, before deploying     |
| `npm run astro ...`              | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`        | Get help using the Astro CLI                     |
| `npx lint-staged`                | Goes through staging files                       |
| `npm run format && npm run lint` | Goes through the whole code base                 |
| `sh .husky/pre-commit`           | Runs Husky hook (testing infrastructure)         |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

/
├── public/ # Suoraan tarjoiltavat staattiset tiedostot (favicon.svg, robots.txt)
├── src/
│ ├── assets/ # Astron prosessoimat staattiset resurssit (kuvat, ikonit)
│ ├── components/ # Esityskerros (Käyttöliittymä)
│ │ ├── ui/ # "Tyhmät" globaalit peruskomponentit (Button.astro, Input.astro)
│ │ ├── form/ # Lomakkeisiin liittyvät komponentit (ContactForm.astro)
│ │ ├── blog/ # Blogidomainin komponentit (ArticleCard.astro, TOC.astro)
│ │ ├── shop/ # Kauppadomainin komponentit (ProductCard.astro, CartDrawer.astro)
│ │ └── layout/ # Rakenteelliset osat (Header.astro, Footer.astro)
│ ├── content/ # Astro Content Collections (Tyyppiturvallinen sisältö)
│ │ ├── blog/ # Markdown/MDX -blogipostaukset
│ │ ├── products/ # Tuotedata (jos hallitaan lokaalisti eikä esim. Shopifyssa)
│ │ └── config.ts # Zod-skeemat sisältökokoelmille
│ ├── layouts/ # Sivujen kääreet (BaseLayout.astro, DefaultPage.astro)
│ ├── lib/ # Liiketoimintalogiikka ja integraatiot
│ │ ├── schemas/ # Zod-validaatioskeemat (esim. contactSchema.ts)
│ │ ├── utils/ # Puhtaat apufunktiot (formatDate.ts, formatCurrency.ts)
│ │ └── api/ # Kolmansien osapuolien API-asiakkaat (esim. maksuvälittäjä)
│ ├── pages/ # Tiedostopohjainen reititys (File-system routing)
│ │ ├── api/ # Vercel Edge -funktiot
│ │ │ └── contact.ts # Lomakkeen POST-käsittelijä
│ │ ├── blog/ # Blogin reitit
│ │ │ ├── index.astro
│ │ │ └── [slug].astro # Dynaaminen reitti yksittäiselle postaukselle
│ │ └── index.astro # Etusivu / Landing page
│ ├── store/ # Asiakaspuolen tilanhallinta (Client-side state)
│ │ └── cartStore.ts # Ostoskorin tila
│ ├── styles/
│ │ └── global.css # Tailwind v4 -teemakonfiguraatio
│ ├── env.d.ts # Automaattisesti generoidut ja omat tyyppimäärittelyt
│ └── middleware.ts # Pyyntöjen portinvartija (esim. auth)
├── .env # Salaisuudet (ei gitiin)
├── .prettierignore
├── astro.config.mjs
├── eslint.config.js
└── package.json
