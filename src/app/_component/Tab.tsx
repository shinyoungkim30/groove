'use client';

import { useState } from 'react';
import styles from './Tab.module.css';

export default function Tab() {
  const [tab, setTab] = useState('pop');

  const onClickPop = () => {
    setTab('pop');
  };

  const onClickNew = () => {
    setTab('new');
  };

  return (
    <div className={styles.tabFixed}>
      <div className={styles.tab}>
        <div onClick={onClickPop}>
          인기글
          <div className={styles.tabIndicator} hidden={tab === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신글
          <div className={styles.tabIndicator} hidden={tab === 'pop'}></div>
        </div>
      </div>
    </div>
  );
}
