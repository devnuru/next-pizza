import Image from 'next/image';
import styles from '../styles/Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td className={styles.imgContainer}>
              <Image
                src='/img/pizza.png'
                layout='fill'
                objectFit='cover'
                alt='pizza'
              />
            </td>
            <td>
              <span className={styles.name}>CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td className={styles.price}>$19.99</td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>439.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Cart;
