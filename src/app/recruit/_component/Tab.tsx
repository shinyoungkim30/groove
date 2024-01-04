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
    setTab('project');
  };

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        {tab === 'all' && (
          <>
            <div className={styles.tabIndicator} onClick={onClickAll}>
              전체
            </div>
            <div onClick={onClickBand}>팀원 모집</div>
            <div onClick={onClickEmploy}>채용</div>
            <div onClick={onClickProject}>프로젝트</div>
          </>
        )}
        {tab === 'band' && (
          <>
            <div onClick={onClickAll}>전체</div>
            <div className={styles.tabIndicator} onClick={onClickBand}>
              팀원 모집
            </div>
            <div onClick={onClickEmploy}>채용</div>
            <div onClick={onClickProject}>프로젝트</div>
          </>
        )}
        {tab === 'employ' && (
          <>
            <div onClick={onClickAll}>전체</div>
            <div onClick={onClickBand}>팀원 모집</div>
            <div className={styles.tabIndicator} onClick={onClickEmploy}>
              채용
            </div>
            <div onClick={onClickProject}>프로젝트</div>
          </>
        )}
        {tab === 'project' && (
          <>
            <div onClick={onClickAll}>전체</div>
            <div onClick={onClickBand}>팀원 모집</div>
            <div onClick={onClickEmploy}>채용</div>
            <div className={styles.tabIndicator} onClick={onClickProject}>
              프로젝트
            </div>
          </>
        )}
      </div>
    </div>
  );
}
