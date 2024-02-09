'use client'

import { Routes } from '@/app/lib/Routes';
import Resume, { ResumeDisplayType } from '@/app/ui/Resume/Resume';
import clsx from 'clsx';
import Parser from 'html-react-parser';
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
              className={clsx(pathName === route.path ? 'is-current' : '', 'mainNav__links__item__link')}
              onClick={hideMobileMenu}
            >
              {route.name}
            </Link>
          </li>
        );
      })}
      <li className="mainNav__links__item">
        <Resume className='mainNav__links__item__link' displayText={Parser('R&eacute;sum&eacute;') as string} displayType={ResumeDisplayType.link} />
      </li>
    </ul>
  );
}
