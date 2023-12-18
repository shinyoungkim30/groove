import styles from './Main.module.css';
import Post from './Post';

export default function Main() {
  return (
    <div className={styles.container}>
      <h3>인기글</h3>
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
