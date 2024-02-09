import { Routes } from '@/app/lib/Routes';
import '@/app/not-found.scss';
import Header from '@/app/ui/Header/Header';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="contentWrapper">
      <Header text="Not Found" />
     
      <section className="notFound__wrapper">
        <h2 className="notFound__subheading">Well this is embarrassing&hellip;</h2>
        <p className="notFound__bodyText">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <p className="notFound__bodyText">Maybe you were looking for one of these pages:</p>
        <ul className="notFound__links">
          {Routes.map((route, key = 0) => {
            return (
              <li key={key++} className="notFound__links__item">
                <Link href={route.path} className="notFound__links__item__link">
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
