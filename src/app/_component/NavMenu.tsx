'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import styles from './NavMenu.module.css';

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Link href="/community">
        <div className={styles.navTitle}>
          {segment === 'community' ? (
            <div style={{ color: 'black' }}>커뮤니티</div>
          ) : (
            <div>커뮤니티</div>
          )}
        </div>
      </Link>
      <Link href="/recruit">
        <div className={styles.navTitle}>
          {segment === 'recruit' ? (
            <div style={{ color: 'black' }}>구인구직</div>
          ) : (
            <div>구인구직</div>
          )}
        </div>
      </Link>
    </>
  );
}
