import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN CITY</h1>
      <p className={styles.desc}>
        Magna elit officia ex id qui pariatur nisi magna sint velit. Mollit
        adipisicing consequat magna reprehenderit fugiat eu sunt dolor velit ex.
        Est nulla tempor velit laborum.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
