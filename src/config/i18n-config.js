import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const susupportedLngs = ['en', 'es'];

const configurei18n = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      debug: true,
      // lng: 'en', // if you're using a language detector, do not define the lng option
      supportedLngs: susupportedLngs,
      fallbackLng: susupportedLngs[0],
      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: {
        en: {
          translation: {
            'alone': 'Are you alone, {{name}}? 🥺',
            'welcome': 'Welcome to this KS!',
            'presenter': 'Presenter',
            'name': 'My name is {{name}}',
            'people_one': 'There is {{count}} person online!',
            'people_other': 'There are {{count}} people online!'
          }
        },
        es: {
          translation: {
            'alone': '¿No tienes compañía, {{name}}? 🥺',
            'welcome': '¡Te doy la bienvenida a esta KS!',
            'presenter': 'Presentación a cargo de',
            'name': 'Mi nombre es {{name}}',
            'people_one': '¡Hay {{count}} persona en línea!',
            'people_other': '¡Hay {{count}} personas en línea!'
          }
        }
      },
    });
};

export {
  susupportedLngs,
  configurei18n
};
