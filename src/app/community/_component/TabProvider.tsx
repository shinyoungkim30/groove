'use client';

import { ReactNode, createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'new',
  setTab: (value: 'new' | 'pop') => {},
  tab2: 'free',
  setTab2: (value: 'free' | 'question' | 'info' | 'market') => {},
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('new');
  const [tab2, setTab2] = useState('free');

  return (
    <TabContext.Provider value={{ tab, setTab, tab2, setTab2 }}>
      {children}
    </TabContext.Provider>
  );
}
