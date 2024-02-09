import { WorkDataType, WorkLinkType } from '@/app/lib/WorkData';
import '@/app/ui/WorkDescription/WorkDescription.scss';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';
import Link from 'next/link';

type WorkDescriptionProps = {
  workData: WorkDataType;
  currentNum: number;
  numItems: number;
  linkToPrev: string;
  linkToNext: string;
};

export default function WorkDescription({ workData, currentNum, numItems, linkToPrev, linkToNext }: WorkDescriptionProps) {
  const { workTitle, workLabel, description, skills, links } = workData;

  return (
    <section className="workDetails__info">
      <header className="workDetails__header">
        <h1 className="workDetails__header__label">{Parser(workLabel)}</h1>
        <h2 className="workDetails__header__title">{Parser(workTitle)}</h2>
      </header>
      <article className="workDetails__info__description">
        <p className="workDetails__info__description__text">{Parser(description)}</p>
      </article>
      <footer className="workDetails__info__footer">
        <ul className="tags">
          {skills.map((skill, key = 0) => {
            return (
              <li key={key++} className="tag">
                <span className="tag__point" />
                <span className="tag__hole" />
                {Parser(skill)}
              </li>
            );
          })}
        </ul>
        {links !== undefined && links.length > 0 && (
          <section className="workDetails__info__footer__links">
            {links.map((link, key = 0) => {
              return (
                <p key={key++}>
                  <a
                    href={Parser(link.url) as string}
                    className="workDetails__info__footer__links__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Parser(link.title)}
                  </a>
                </p>
              );
            })}
          </section>
        )}
        <section className="workDetails__info__footer__linkToOtherWork">
          <p>
            <Link href={`/my-work/${linkToPrev}`} className="workDetails__info__footer__linkToOtherWork__link">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="workDetails__info__footer__linkToOtherWork__icon workDetails__info__footer__linkToOtherWork__icon--previous"
              />Previous
            </Link>
          </p>
          <p>
            {currentNum} of {numItems}
          </p>
          <p>
            <Link href={`/my-work/${linkToNext}`} className="workDetails__info__footer__linkToOtherWork__link">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="workDetails__info__footer__linkToOtherWork__icon workDetails__info__footer__linkToOtherWork__icon--next"
              />Next
            </Link>
          </p>
        </section>
      </footer>
    </section>
  );
}
