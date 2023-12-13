'use client';

import { ReactNode, createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'pop',
  setTab: (value: 'pop' | 'new') => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('pop');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
