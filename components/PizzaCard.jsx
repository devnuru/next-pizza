import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/pizza.png' alt='pizza' width='500' height='500' />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Magna elit officia ex id qui pariatur nisi magna sint velit. Mollit
      </p>
    </div>
  );
};

export default PizzaCard;