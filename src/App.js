import { useCallback, useState } from 'react';
import { useAlert } from 'react-alert';

import Dashboard from './Dashboard';
import styles from './App.module.scss';

const App = () => {
  const alert = useAlert();

  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count === 1) {
      alert.show(`Are you alone, ${name}? 🥺`)
    }
    setCount(prev => Math.max(prev - 1, 1));
  }, [alert, count, name]);

  return (
    <div className={styles.root}>
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
