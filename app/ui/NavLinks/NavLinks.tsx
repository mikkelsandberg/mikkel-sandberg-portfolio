'use client'

import { Routes } from '@/app/lib/Routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinksProps = {
  hideMobileMenu: () => void;
};

export default function NavLinks({ hideMobileMenu }: NavLinksProps) {
  const pathName = usePathname();

  return (
    <ul className="mainNav__links">
      {Routes.map((route) => {
        return (
          <li key={route.path} className="mainNav__links__item">
            <Link
              href={route.path}
              className={`${pathName === route.path ? 'is-current' : ''} mainNav__links__item__link`}
              onClick={hideMobileMenu}
            >
              {route.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
