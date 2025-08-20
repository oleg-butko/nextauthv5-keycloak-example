# nextauthv5-keycloak-example

## Changelog
- Use [next-pages-template](https://github.com/mantinedev/next-pages-template)
- [Set up VS Code](https://mantine.dev/getting-started/#set-up-vs-code)
- <details><summary>Fix ...css.mjs.map 404</summary>
  When DevConsole is opened:
  
  ```
  GET /_next/static/chunks/app/UnstyledButton.module.css.mjs.map 404 in 900ms
  GET /_next/static/chunks/app/UnstyledButton.module.css.mjs.map 404 in 52ms
  ```
  </details>
- Add Nextra
- Add MantineNavBar from credits/1
- Add localization from credits/2
- <details><summary>Update Next.js (v15.5.0), nextra (v4.3.0)</summary>
  But there is issue with type check in `mdx-components.ts`
  </details> 


## Features

- Mantine [next-pages-template](https://github.com/mantinedev/next-pages-template)
  - [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Storybook](https://storybook.js.org/)
  - [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
- [Nextra](https://github.com/shuding/nextra)
  - [i18n](https://nextra.site/docs/guide/i18n)

## npm scripts from Mantine template

### Build/dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Misc

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier

### Credits
1. [Template](https://www.undolog.com/p/elevate-your-nextjs-project-with)  for NextJS app router + Mantine UI + Nextra
2. [SWR i18n Example](https://github.com/shuding/nextra/tree/main/examples/swr-site)
