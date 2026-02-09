import { useContext } from 'react';
import { I18nContext } from './I18nProvider';
import { translations, Translations } from './translations';

export function useI18n() {
  const context = useContext(I18nContext);
  
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }

  const { language, setLanguage } = context;
  const t = translations[language];

  return {
    language,
    setLanguage,
    t,
  };
}
