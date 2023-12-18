import styles from './Main.module.css';
import PopPosts from './PopPosts';

export default function Main() {
  return (
    <div className={styles.container}>
      <h3>인기글</h3>
      <PopPosts />
    </div>
  );
}
