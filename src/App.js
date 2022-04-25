import { useCallback, useState } from 'react';
import { useAlert } from 'react-alert';

import Dashboard from './Dashboard';

const App = () => {
  const alert = useAlert();

  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    if (count === 1) {
      alert.show('Are you alone? 🥺')
    }
    setCount(prev => Math.max(prev - 1, 1));
  }, [alert, count]);

  return (
    <Dashboard
      name={name}
      setName={setName}
      count={count}
      decrement={decrement}
      increment={increment} />
  );
};

export default App;
