import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Featured.module.css';
import arrowl from '../public/img/arrowl.png';
import arrowr from '../public/img/arrowr.png';

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    '/img/featured1.png',
    '/img/featured2.png',
    '/img/featured3.png',
  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        <Image src={arrowl} alt='arrowl' layout='fill' objectFit='contain' />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt='featured1'
              layout='fill'
              objectFit='contain'
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        <Image src={arrowr} alt='arrowr' layout='fill' objectFit='contain' />
      </div>
    </div>
  );
};

export default Featured;
