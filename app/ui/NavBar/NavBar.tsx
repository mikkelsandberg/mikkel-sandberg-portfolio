'use client';

import '@/app/ui/NavBar/NavBar.scss';
import NavLinks from '@/app/ui/NavLinks/NavLinks';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type SocialLinkType = {
  link: string;
  icon: IconDefinition;
};

const socialLinks: SocialLinkType[] = [
  {
    link: 'https://www.linkedin.com/in/mikkelsandberg/',
    icon: faLinkedin,
  },
  {
    link: 'https://github.com/mikkelsandberg',
    icon: faGithubSquare,
  },
];

type NavBarProps = {
  clearOfHeader: boolean;
  hideMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

export default function NavBar({
  clearOfHeader,
  hideMobileMenu,
  toggleMobileMenu,
}: NavBarProps) {
  const pathName = usePathname();
  const { width } = useWindowSize();

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
        pathName !== '/' && pathName !== '/my-work' && pathName !== '/about-me' && pathName !== '/test'
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
            icon={faBars}
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
