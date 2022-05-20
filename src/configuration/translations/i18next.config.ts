import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './resources/en.json';
import jpTranslations from './resources/jp.json';

i18next.use(initReactI18next).init({
  // https://www.i18next.com/misc/migration-guide#json-format-v4-pluralization
  compatibilityJSON: 'v3',
  lng: 'jp', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: enTranslations,
    },
    jp: {
      translation: jpTranslations,
    },
  },
});

export default i18next;
