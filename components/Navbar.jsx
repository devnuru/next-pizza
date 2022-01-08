import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import telephone from '../public/img/telephone.png';
import logo from '../public/img/logo.png';
import cart from '../public/img/cart.png';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={telephone} alt='telephone' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>01701126528</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt='Logo' width='160px' height='69px' />
          <li className={styles.listItem}>Event</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src={cart} alt='cart' width='30px' height='30px' />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
