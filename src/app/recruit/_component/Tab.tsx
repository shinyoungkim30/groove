'use client';

import { useState } from 'react';

import styles from './Tab.module.css';

export default function Tab() {
  const [tab, setTab] = useState('all');

  const onClickAll = () => {
    setTab('all');
  };
  const onClickBand = () => {
    setTab('band');
  };
  const onClickEmploy = () => {
    setTab('employ');
  };
  const onClickProject = () => {
    setTab('Project');
  };

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        {tab === 'all' && (
          <>
            <div className={styles.tabIndicator} onClick={onClickAll}>
              최신글
            </div>
            <div onClick={onClickBand}>인기글</div>
          </>
        )}
      </div>
    </div>
  );
}
