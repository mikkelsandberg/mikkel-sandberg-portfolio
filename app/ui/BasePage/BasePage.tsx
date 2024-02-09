'use client';

import NavBar from '@/app/ui/NavBar/NavBar';
import RouteChange from '@/app/ui/RouteChange/RouteChange';
import { useWindowSize } from '@uidotdev/usehooks';
import { useState } from 'react';

type BasePageProps = {
  children: React.ReactNode;
};

export default function BasePage({ children }: BasePageProps) {
  const { width } = useWindowSize();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [clearOfHeader, setClearOfHeader] = useState(false);

  return width === null ? <></> : (
    <main
      id="App"
      className={`${width < 768 ? 'mobileView' : ''}${mobileMenuVisible ? ' mobileMenuVisible' : ''}`}>
      <RouteChange setClearOfHeader={setClearOfHeader} />
      <NavBar
        clearOfHeader={clearOfHeader}
        hideMobileMenu={() => setMobileMenuVisible(false)}
        toggleMobileMenu={() => setMobileMenuVisible(!mobileMenuVisible)}
      />

      {children}
    </main>
  );
}