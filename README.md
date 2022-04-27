# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

First you need to install the dependencies. As there are some libraries that do not meet peer dependencies restrictions, you need to install the dependencies with the `--force` flag:

```bash
npm i --force
```

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Tutorial (branches)

The tutorial will go through the steps of creating a React app with i18n support, and the progress will be saved in different branches:

- `01_basic-react-app`: Basic react app without internationalization (i18n) support.

- `02_i18n-support`: Added i18n support to react app using [react-i18next](https://react.i18next.com/).

- `03_language-switcher`: Added language switcher and support for both Spanish and English languages to react app.

- `04_advanced-features`: Added advanced features such as:
    - load translation using http (`/public/locales/` folder)
    - browser language detection

- `05_namespaces`: Added [namespaces support](https://react.i18next.com/guides/multiple-translation-files) to better organize translation files.

- `06_extraction-tool`: Added [i18next-parser](https://github.com/i18next/i18next-parser) to extract translation strings from source code.

## Useful links

- [i18next](https://www.i18next.com/): internationalization-framework that provides you with a complete solution to localize your product from web to mobile and desktop.

- [react-i18next](https://react.i18next.com/): powerful internationalization framework for React / React Native which is based on i18next.

- [Flags are not languages](http://www.flagsarenotlanguages.com/blog/): a blog about designing global user experiences: beyond language, location & culture.
