import Tab from './Tab';
import TabProvider from './TabProvider';

import styles from './Main.module.css';
import Post from './Post';

export default function Main() {
  return (
    <div className={styles.container}>
      <aside className={styles.left}>
        <div className={styles.leftTempDiv}><h4>인기글</h4></div>
      </aside>
      <section>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </div>
  );
}
