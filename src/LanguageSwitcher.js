import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { susupportedLngs } from './config';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const importIcons = async () => {
      const icons = await Promise.all(susupportedLngs.map(async language => {
        const data = await import(`/node_modules/language-icons/icons/${language}.svg`);
        return {
          code: language,
          icon: data.default
        };
      }));
      setLanguages(icons);
    }
  
    importIcons()
      .catch(console.error);;
  }, [])

  const handleLanguageChange = useCallback(language => {
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <div>
      {languages.map(language => (
        <button
          key={language.code}
          className={i18n.resolvedLanguage === language.code ? styles.selected : ''}
          disabled={i18n.resolvedLanguage === language.code}
          onClick={() => handleLanguageChange(language.code)}
        >
          <img alt={language.code} src={language.icon} className={styles.icon} />
        </button>
      ))}
    </div>
  )
};

export default LanguageSwitcher;
