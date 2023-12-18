import { ReactNode } from 'react';
import CommunityMenu from './_component/CommunityMenu';

import styles from './Community.module.css';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <CommunityMenu />
      {children}
    </div>
  );
}
