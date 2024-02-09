import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

type RouteChangeProps = {
  setClearOfHeader: Dispatch<SetStateAction<boolean>>;
};

export default function RouteChange({setClearOfHeader}: RouteChangeProps) {
  const pathName = usePathname();

  const checkScrollTop = useCallback(() => {
    const scrollTargetElem = document.querySelector('.splashScreen__wrapper');
    const navBarElem = document.querySelector('.mainNav');

    if (scrollTargetElem === null) {
      setClearOfHeader(true);
    } else if (navBarElem !== null) {
      if (window.scrollY >= scrollTargetElem.scrollHeight - navBarElem.scrollHeight) {
        setClearOfHeader(true);
      } else {
        setClearOfHeader(false);
      }
    }
  }, [setClearOfHeader]);

  function scrollToTop() {
    return window.scroll({ top: 0 });
  }

  useEffect(() => {
    scrollToTop();
    checkScrollTop();

    window.addEventListener('scroll', () => checkScrollTop());

    return () => {
      window.removeEventListener('scroll', () => checkScrollTop());
    };
  }, [checkScrollTop, pathName]);

  return null;
}
