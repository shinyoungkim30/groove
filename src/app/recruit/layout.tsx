import { ReactNode } from 'react';
import RecruitMenu from './_component/RecruitMenu';

import styles from './Recruit.module.css';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <RecruitMenu />
      {children}
    </div>
  );
}
