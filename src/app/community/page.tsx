import CommunityMenu from './_component/CommunityMenu';
import Post from '../_component/Post';

import styles from './Community.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <CommunityMenu />
      <Post />
    </div>
  );
}
