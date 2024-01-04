import PopPosts from '@/app/_component/PopPosts';
import styles from './PostDetail.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      게시물 디테일 페이지
      <PopPosts />
    </div>
  );
}
