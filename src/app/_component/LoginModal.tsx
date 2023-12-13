import styles from './LoginModal.module.css';

export default function LoginModal() {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>로그인</div>
    </div>
  );
}
