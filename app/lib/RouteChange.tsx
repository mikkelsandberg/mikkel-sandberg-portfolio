import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteChange() {
  const pathName = usePathname();

  function scrollToTop() {
    return window.scroll({ top: 0 });
  }

  useEffect(() => {
    scrollToTop();
  }, [pathName]);

  return null;
}
