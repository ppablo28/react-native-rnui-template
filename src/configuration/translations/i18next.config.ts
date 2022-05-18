import i18next from 'i18next';
import enTranslations from './resources/en.json';
import jpTranslations from './resources/jp.json';

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: enTranslations,
    jp: jpTranslations,
  },
});
