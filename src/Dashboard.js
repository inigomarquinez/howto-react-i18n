import { useTranslation } from 'react-i18next';

import styles from './Dashboard.module.scss';

const Dashboard = ({ name, setName, count, decrement, increment }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t('pages:dashboard.welcome')}</h1>

      <h2>{t('pages:dashboard.description')}</h2>

      <div>
        {t('pages:dashboard.presenter')}: <input type="text" onChange={e => setName(e.target.value)}/>
      </div>

      <p>{t('pages:dashboard.name', { name })}</p>

      {name.trim().length > 0 && (
        <>
          <p>{t('pages:dashboard.people', { count })}</p>

          <div>
            <button className={styles.decrement} onClick={decrement}>-</button>
            <button className={styles.increment} onClick={increment}>+</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
