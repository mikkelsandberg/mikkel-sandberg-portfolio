'use client';

import AboutMeData from '@/app/lib/AboutMeData';
import { resumeUrl } from '@/app/lib/Constants';
import '@/app/ui/AboutMe/AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistoryState, useWindowSize } from '@uidotdev/usehooks';
import Parser from 'html-react-parser';
import Image from 'next/image';
import { MouseEvent } from 'react';

export default function AboutMe() {
  const { profilePic, stats, introText, bodyContent } = AboutMeData;
  const history = useHistoryState();
  const { width } = useWindowSize();

  function navigateInternal(e: MouseEvent<HTMLParagraphElement>) {
    e.preventDefault();

    if (e.currentTarget.tagName === 'A' && !e.currentTarget.hasAttribute('target')) {
      history.set(e.currentTarget.getAttribute('href'));
    }
  }

  return width === null ? <></> : (
    <section className={`aboutMe__wrapper${width < 768 ? ' aboutMe__wrapper--mobile' : ''}`}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img className="aboutMe__profilePic" src={profilePic} alt="Mikkel Sandberg profile" />
      <article className="aboutMe__intro">
        <section className="aboutMe__intro__stats">
          {stats.map((item, key = 0) => {
            return (
              <div key={key++} className="aboutMe__intro__stat">
                <FontAwesomeIcon icon={item.icon} className="aboutMe__intro__stat__icon" />
                <p className="aboutMe__intro__stat__text">{Parser(item.stat)}</p>
              </div>
            );
          })}
        </section>
      </article>
      <article className="aboutMe__body">
        <p className="aboutMe__body__introText">{Parser(introText)}</p>
        {bodyContent.map((item, key = 0) => {
          return (
            <p key={key++} className="aboutMe__body__text" onClick={e => navigateInternal(e)}>
              {Parser(bodyContent[0])}
            </p>
          );
        })}
        <a className="aboutMe__body__downloadResumeButton" href={resumeUrl} target="_blank" rel="noopener noreferrer">
					View R&eacute;sum&eacute;
        </a>
      </article>
    </section>
  );
}
