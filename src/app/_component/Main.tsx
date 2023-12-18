import styles from './Main.module.css';
import Post from './Post';

export default function Main() {
  return (
    <div className={styles.container}>
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
