import styles from './Dashboard.module.scss';

const Dashboard = ({ name, setName, count, decrement, increment }) => (
  <div className={styles.root}>
    <h1>Welcome to this KS!</h1>

    <div>
      Presenter: <input type="text" onChange={e => setName(e.target.value)}/>
    </div>

    <p>My name is {name}.</p>

    {name.trim().length > 0 && (
      <>
        <p>There are {count} people online!</p>

        <div>
          <button className={styles.decrement} onClick={decrement}>-</button>
          <button className={styles.increment} onClick={increment}>+</button>
        </div>
      </>
    )}
  </div>
);

export default Dashboard;
