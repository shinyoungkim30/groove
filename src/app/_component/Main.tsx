import Tab from './Tab';
import TabProvider from './TabProvider';

import styles from './Main.module.css';

export default function Main() {
  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <div className={styles.leftTempDiv}>
        </div></aside>
      <section></section>
      <aside></aside>
    </div>
  );
}
