import { useCallback, useState } from 'react';
import { useAlert } from 'react-alert';
import { useTranslation } from 'react-i18next';

import Dashboard from './Dashboard';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './App.module.scss';

const App = () => {
  const alert = useAlert();
  const { t } = useTranslation();

  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count === 1) {
      alert.show(t('alert:alone', { name }));
    }
    setCount(prev => Math.max(prev - 1, 1));
  }, [alert, count, name, t]);

  return (
    <div className={styles.root}>
      <LanguageSwitcher />
      <Dashboard
        name={name}
        setName={setName}
        count={count}
        decrement={decrement}
        increment={increment} />
    </div>
  );
};

export default App;
