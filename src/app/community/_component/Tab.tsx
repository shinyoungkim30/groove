'use client';

import { useState } from 'react';

import styles from './Tab.module.css';

export default function Tab() {
  const [tab, setTab] = useState('new');
  const [tab2, setTab2] = useState('free');

  const onClickNew = () => {
    setTab('new');
  };
  const onClickPop = () => {
    setTab('Pop');
  };
  const onClickFree = () => {
    setTab2('free');
  };
  const onClickQuestion = () => {
    setTab2('question');
  };
  const onClickInfo = () => {
    setTab2('info');
  };
  const onClickMarket = () => {
    setTab2('market');
  };

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        {tab === 'new' ? (
          <>
            <div className={styles.tabIndicator} onClick={onClickNew}>
              최신글
            </div>
            <div onClick={onClickPop}>인기글</div>
          </>
        ) : (
          <>
            <div onClick={onClickNew}>최신글</div>
            <div className={styles.tabIndicator} onClick={onClickPop}>
              인기글
            </div>
          </>
        )}
      </div>
      <div className={styles.tab2}>
        {tab2 === 'free' && (
          <>
            <div className={styles.tabIndicator} onClick={onClickFree}>
              자유
            </div>
            <div onClick={onClickQuestion}>질문</div>
            <div onClick={onClickInfo}>정보</div>
            <div onClick={onClickMarket}>장터</div>
          </>
        )}
        {tab2 === 'question' && (
          <>
            <div onClick={onClickFree}>자유</div>
            <div className={styles.tabIndicator} onClick={onClickQuestion}>
              질문
            </div>
            <div onClick={onClickInfo}>정보</div>
            <div onClick={onClickMarket}>장터</div>
          </>
        )}
        {tab2 === 'info' && (
          <>
            <div onClick={onClickFree}>자유</div>
            <div onClick={onClickQuestion}>질문</div>
            <div className={styles.tabIndicator} onClick={onClickInfo}>
              정보
            </div>
            <div onClick={onClickMarket}>장터</div>
          </>
        )}
        {tab2 === 'market' && (
          <>
            <div onClick={onClickFree}>자유</div>
            <div onClick={onClickQuestion}>질문</div>
            <div onClick={onClickInfo}>정보</div>
            <div className={styles.tabIndicator} onClick={onClickMarket}>
              장터
            </div>
          </>
        )}
      </div>
    </div>
  );
}
