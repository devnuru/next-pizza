import Image from 'next/image';
import styles from '../../styles/Order.module.css';

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>8347436583</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td className={styles.address}>Rangpur Collage road, 3400</td>

              <td>
                <span className={styles.total}>$439.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/img/paid.png' width={30} height={30} alt='paid' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                src='/img/checked.png'
                width={20}
                height={20}
                alt='checked'
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src='/img/bake.png' width={30} height={30} alt='paid' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                src='/img/checked.png'
                width={20}
                height={20}
                alt='checked'
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src='/img/bike.png' width={30} height={30} alt='paid' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                src='/img/checked.png'
                width={20}
                height={20}
                alt='checked'
                className={styles.checkedIcon}
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src='/img/delivered.png' width={30} height={30} alt='paid' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                src='/img/checked.png'
                width={20}
                height={20}
                alt='checked'
                className={styles.checkedIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>PAID TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$87.98
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$87.98
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$87.98
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
