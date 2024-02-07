import '@/app/ui/NavBar/NavBar.scss';
import NavLinks from '@/app/ui/NavLinks/NavLinks';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

type SocialLinkType = {
  link: string;
  icon: IconDefinition;
};

const socialLinks: SocialLinkType[] = [
  {
    link: 'https://github.com/mikkelsandberg',
    icon: faGithubSquare,
  },
  {
    link: 'https://www.linkedin.com/in/mikkelsandberg/',
    icon: faLinkedin,
  },
  {
    link: 'https://twitter.com/sikkelmandberg',
    icon: faTwitterSquare,
  },
  {
    link: 'https://www.facebook.com/mikkelhsandberg',
    icon: faFacebookSquare,
  }
];

type NavBarProps = {
  clearOfHeader: boolean;
  hideMobileMenu: () => void;
  scrollTarget: string;
  setClearOfHeaderTrue: () => void;
  setClearOfHeaderFalse: () => void;
  toggleMobileMenu: () => void;
}

export default function NavBar({
  clearOfHeader,
  hideMobileMenu,
  scrollTarget,
  setClearOfHeaderTrue,
  setClearOfHeaderFalse,
  toggleMobileMenu,
}: NavBarProps) {
  const pathName = usePathname();
  const { width } = useWindowSize();

  const checkScrollTop = useCallback(() => {
    const scrollTargetElem = document.querySelector(scrollTarget);
    const navBarElem = document.querySelector('.mainNav');

    if (scrollTargetElem !== null && navBarElem !== null) {
      if (window.scrollY >= scrollTargetElem.scrollHeight - navBarElem.scrollHeight) {
        setClearOfHeaderTrue();
      } else {
        setClearOfHeaderFalse();
      }
    }
  }, [scrollTarget, setClearOfHeaderFalse, setClearOfHeaderTrue]);

  useEffect(() => {
    if (scrollTarget !== undefined) {
      checkScrollTop();

      window.addEventListener('scroll', () => checkScrollTop());

      return () => {
        window.removeEventListener('scroll', () => checkScrollTop());
      };
    }
  }, [checkScrollTop, scrollTarget]);

  const navItems = useMemo(() => {
    const renderItems: React.ReactNode[] = [];

    function isWorkItemPage() {
      const regex = /^(\/my-work\/.+)/i;

      return regex.test(pathName);
    }

    function isMobileView() {
      return width! < 768;
    };

    function isNotFoundPage() {
      const onNotFoundPage = Boolean(
        pathName !== '/' && pathName !== '/my-work' && pathName !== '/about-me'
      );

      if (onNotFoundPage) {
        return true;
      }
    }

    function addMobileNavLinks(key = 0) {
      return (
        <div key={key++}>
          <FontAwesomeIcon
            key={key++}
            icon="bars"
            size="2x"
            className="mainNav__mobileMenu__Icon"
            onClick={toggleMobileMenu}
          />
          <div key={key++} className="mainNav__links__wrapper">
            <NavLinks key={key++} hideMobileMenu={hideMobileMenu} />
          </div>
        </div>
      );
    }

    function addDesktopNavLinks(key = 0) {
      return <NavLinks key={key++} hideMobileMenu={hideMobileMenu} />;
    }

    if (isWorkItemPage()) {
      renderItems.push(
        <Link key={'/my-work'} href="/my-work" className="mainNav__backToMyWork">
          Back to my work
        </Link>
      );
    } else if (isNotFoundPage()) {
      return renderItems;
    } else {
      if (isMobileView()) {
        renderItems.push(addMobileNavLinks());
      } else {
        renderItems.push(addDesktopNavLinks());
      }
    }

    return renderItems;
  }, [hideMobileMenu, pathName, toggleMobileMenu, width]);

  return width === null ? <></> : (
    <nav className={`mainNav${clearOfHeader === false ? ' mainNav--notClear' : ''}`}>
      {navItems}

      <ul className="mainNav__social">
        {socialLinks.map((item, key = 0) => {
          return (
            <li key={key++} className="mainNav__social__icon">
              <a href={item.link} className="mainNav__social__icon__link" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
