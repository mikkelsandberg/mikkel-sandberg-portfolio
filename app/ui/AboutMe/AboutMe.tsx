'use client';

import AboutMeData from '@/app/lib/AboutMeData';
import '@/app/ui/AboutMe/AboutMe.scss';
import Resume, { ResumeDisplayType } from '@/app/ui/Resume/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@uidotdev/usehooks';
import Parser, { Element, Text } from 'html-react-parser';
import Link from 'next/link';

export default function AboutMeView() {
  const { profilePic, stats, introText, bodyContent } = AboutMeData;
  const { width } = useWindowSize();

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
        <p className="aboutMe__body__text">
          {Parser(bodyContent, {
            replace: domNode => {
              if (domNode instanceof Element && domNode.name === 'a') {
                const [content] = domNode.children as Text[];
                return <Link href={domNode.attribs.href}>{content.data}</Link>;
              }
            },
          })}
        </p>
        <Resume displayType={ResumeDisplayType.button} />
      </article>
    </section>
  );
}
