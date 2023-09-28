<div align='center'>

<h1>🚀 ⚛️ React-Ts-Next-Boilerplate</h1>
<p><strong>React-Ts-Next-Boilerplate</strong> is a starter project (boilerplate) for developing modern web applications using React, TypeScript, and Next.js. This project aims to provide a solid, ready-to-use foundation to help you quickly build robust and high-performance front-end applications.</p>

<h4> <a href=https://react-ts-next-boilerplate.netlify.app/fr>View Demo</a> <span> · </span> <a href="https://github.com/JFeremy/React-Ts-Next-Boilerplate/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/JFeremy/React-Ts-Next-Boilerplate/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/JFeremy/React-Ts-Next-Boilerplate/issues"> Request Feature </a> </h4>

![GitHub release (with filter)](https://img.shields.io/github/v/release/JFeremy/React-Ts-Next-Boilerplate?style=for-the-badge)
![Netlify](https://img.shields.io/netlify/5a037939-d25e-4d8f-975d-b241fbc4050d?style=for-the-badge&logo=netlify)

![GitHub issues](https://img.shields.io/github/issues/JFeremy/React-Ts-Next-Boilerplate?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/JFeremy/React-Ts-Next-Boilerplate?style=for-the-badge)

</div>

# 📔 Table of Contents

- [🎯 FEATURES](#-features)
- [💻 STACK](#-stack)
- [🧰 GETTING STARTED](#-getting-started)
  - [‼️ Prerequisites](#-prerequisites)
  - [🧪 Running Tests](#-running-tests)
  - [🏃 Run Locally](#-run-locally)
  - [⚙️ Generate elements](#-generate-elements)
    - [📃 Page](#-page)
    - [✏️ Component](#-component)
    - [🎨 UI](#-ui)
- [🚢 DEPLOY TO NETLIFY](#-deploy-to-netlify)
- [🧭 ROADMAP](#-roadmap)
- [🔗 REFERENCES & LINKS](#-references--links)

## 🎯 FEATURES

- **React, TypeScript, and Next.js**: Harness the power of these popular technologies to build modern web applications.
- **ESLint and Prettier Configuration**: Ensure your code is clean and consistent from the start.
- **CSS Styling with Pandacss**: Use Pandacss to efficiently and customizably manage your application's styles.
- **Commit Management with Husky and Lint-Staged**: Avoid poorly formatted or error-ridden commits with these tools.
- **Code Generation with Plop**: Speed up component and page creation with this code generator.
- **Unit Testing with Jest and Testing Library**: Ensure your application's stability by writing unit tests.
- Detailed README with instructions for getting started and developing your project.

## 💻 STACK

![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/react?style=for-the-badge&logo=react&labelColor=000000)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/next?style=for-the-badge&logo=nextdotjs&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/typescript?style=for-the-badge&logo=typescript&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/%40pandacss%2Fdev?style=for-the-badge&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/next-sitemap?style=for-the-badge&labelColor=000000)

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/eslint?style=for-the-badge&logo=eslint&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/prettier?style=for-the-badge&logo=prettier&labelColor=000000)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/postcss?style=for-the-badge&logo=postcss&labelColor=000000)

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/%40testing-library%2Freact?style=for-the-badge&logo=testinglibrary&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/jest?style=for-the-badge&logo=jest&labelColor=000000)

![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/semantic-release?style=for-the-badge&logo=semantic-release&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/lint-staged?style=for-the-badge&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/husky?style=for-the-badge&labelColor=000000)
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/JFeremy/React-Ts-Next-Boilerplate/dev/%40commitlint%2Fcli?style=for-the-badge&logo=commitlint&labelColor=000000)

## 🧰 GETTING STARTED

### ‼️ Prerequisites

- Install Node JS & npm in your computer<a href="https://kinsta.com/blog/how-to-install-node-js/"> Here</a>

- Install Git in your computer<a href="https://github.com/git-guides/install-git"> Here</a>

- This project uses Yarn as package manager
  ```bash
  npm install --global yarn
  ```

### 🧪 Running Tests

To run tests, run the following command

```bash
yarn test
```

### 🏃 Run Locally

Clone the project

```bash
https://github.com/JFeremy/React-Ts-Next-Boilerplate
```

Go to the project directory

```bash
cd my-project
```

Install dependencies

```bash
yarn install
```

Build the project

```bash
yarn build
```

Start the server

```bash
yarn start
```

### ⚙️ Generate elements

#### 📃 Page

This script will generate all content for a new page

```bash
yarn generate // choose 📃 Page
> Page name ? // Enter the name of the page (it will be the URL path)
> Page path after [lang] ? // for example for an subpage cv under about-me, enter about-me/
```

Example

```bash
λ yarn generate
yarn run v1.22.19
$ plop
? [PLOP] Please choose a generator. 📃  Page - Create a page
? Page name ? cv
? Page path after [lang] ? about-me/
✔  ++ \src\app\[lang]\about-me\cv\page.tsx
✔  ++ \src\app\[lang]\about-me\cv\__tests__\page.test.tsx
✔  ++ \public\locales\pages\cv.page.ts
✔  _+ \public\locales\pages\index.ts
✔  _+ \public\locales\pages\index.ts
✔  ++ \public\locales\metadatas\cv.metadata.ts
✔  _+ \public\locales\metadatas\index.ts
✔  _+ \public\locales\metadatas\index.ts
Done in 13.43s.
```

---

#### ✏️ Component

This script will generate all content for a new component

```bash
yarn generate // choose ✏️ Component
> Component name ? // Enter the name of the component
> Component required a dedicated translation ?  // Your component will have his own translation and not import by another component or page
> Component required a dedicated behavior ? // Your component need a dedicated behavior like a hook to split it between render and features
> Is a client Component ? // Your component will be generated in the client interface
```

Example

```bash
λ yarn generate
yarn run v1.22.19
$ plop
? [PLOP] Please choose a generator. ✏️  Component - Create a reusable component
? Component name ?  Footer
? Component required a dedicated translation ?  Yes
? Component required a dedicated behavior ?  Yes
? Is a client Component ?  Yes
✔  ++ \src\components\footer\index.tsx
✔  ++ \src\components\footer\__tests__\index.test.tsx
✔  ++ \src\components\footer\behavior.tsx
✔  ++ \src\components\footer\__tests__\behavior.test.tsx
✔  ++ \public\locales\components\footer.component.ts
✔  _+ \public\locales\components\index.ts
✔  _+ \public\locales\components\index.ts
Done in 15.58s.
```

---

#### 🎨 UI

This script will generate all content for a new UI element like button design or link ...

```bash
yarn generate // choose 🎨 UI
> UI element name ? // Enter the name of the ui element
```

Example

```bash
λ yarn generate
yarn run v1.22.19
$ plop
? [PLOP] Please choose a generator. 🎨  UI - Create a reusable UI element
? UI element name ?  link
✔  ++ \src\ui\link\index.tsx
✔  ++ \src\ui\link\design.tsx
Done in 7.54s.
```

## 🚢 DEPLOY TO NETLIFY

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JFeremy/React-Ts-Next-Boilerplate)

## 🧭 ROADMAP

- 🗹 Setup project
- ☐ Use plop-generator
- ☐ Write specific documentations

## 🔗 REFERENCES & LINKS

- [Icons](https://www.s-ings.com/typicons/)
- [TsConfig](https://www.typescriptlang.org/tsconfig)
- [Sitemap](https://github.com/iamvishnusankar/next-sitemap#readme)
- Tests
  - [next13](https://dev.to/peterlidee/-mocking-usesearchparams-and-userouter-with-jest-in-next-13-nextnavigation-15bd)
  - [mock](https://dev.to/peterlidee/how-to-mock-next-router-with-jest-3p6b)
- Netlify
  - [middleware](https://docs.netlify.com/integrations/frameworks/next-js/middleware/)
  - [cache](https://nextjs.org/docs/pages/building-your-application/deploying/ci-build-caching#netlify-ci)
- README
  - [badges](https://shields.io/badges/git-hub-release-with-filter)
  - generator
    - [readme.so](https://readme.so/fr)
    - [genreadme.cloud](https://www.genreadme.cloud/repo)
