import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { susupportedLngs, i18nNamespaces } from './enums';

const configurei18n = () => {
  i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      // lng: 'en', // if you're using a language detector, do not define the lng option
      supportedLngs: susupportedLngs,
      fallbackLng: susupportedLngs[0],
      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
      ns: i18nNamespaces,
      defaultNS: i18nNamespaces[0],
      fallbackNS: i18nNamespaces[0],
      // saveMissing: true, // runtime extraction => https://www.i18next.com/how-to/extracting-translations#3-runtime-extraction,
      backend: {
        // loadPath: process.env.REACT_APP_I18NEXUS_LOAD_PATH
        loadPath: process.env.REACT_APP_I18NEXUS_LOAD_PATH_VERSIONED
      }
    });
};

export default configurei18n;
