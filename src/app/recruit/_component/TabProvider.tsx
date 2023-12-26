'use client';

import { ReactNode, createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'all',
  setTab: (value: 'all' | 'band' | 'employ' | 'project') => {},
});

type Props = { children: ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('all');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
