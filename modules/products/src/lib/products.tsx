import styles from './products.module.css';

import { Orders } from '@orders';

export function Products() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <Orders />
    </div>
  );
}

export default Products;
