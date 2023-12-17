import Tab from './Tab';
import TabProvider from './TabProvider';

import styles from './Main.module.css';
import Post from './Post';

export default function Main() {
  return (
    <div className={styles.container}>
      {/* <h4>인기글</h4> */}
      {/* <aside className={styles.left}>
        <div className={styles.leftTempDiv}></div>
      </aside> */}
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
    </div>
  );
}
