import Post from '../_component/Post';
import RecruitMenu from './_component/RecruitMenu';

import styles from './Recruit.module.css';

export default function RecruitListPage() {
  return (
    <div className={styles.container}>
      <RecruitMenu />
      <Post />
    </div>
  );
}
