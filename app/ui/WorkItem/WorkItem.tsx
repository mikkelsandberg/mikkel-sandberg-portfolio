import { formatText } from '@/app/lib/HelperFunctions';
import { WorkDataType } from '@/app/lib/WorkData';
import '@/app/ui/WorkItem/WorkItem.scss';
import Parser from 'html-react-parser';
import Link from 'next/link';

export default function WorkItem({ item }: { item: WorkDataType }) {
  const { images, summary, tags, workLabel, workTitle } = item;

  return (
    <Link href={`/my-work/${formatText(workLabel)}-${formatText(workTitle)}`} className="workItem">
      <div
        className="workItem__image"
        style={{ backgroundImage: `url(${images[0].thumbnail || images[0].fullSize})` }}
      />
      <div className="workItem__details">
        <p className="workItem__label">{Parser(workLabel)}</p>
        <header className="workItem__title">
          <h3 className="workItem__title__text">{Parser(workTitle)}</h3>
        </header>
        <article className="workItem__description">
          <p className="workItem__description__text">{Parser(summary)}</p>
        </article>
        <footer>
          <ul className="tags">
            {tags.map((tag, key = 0) => {
              return (
                <li key={key++} className={`tag tag--${formatText(tag)}`}>
                  <span className="tag__point" />
                  <span className="tag__hole" />
                  {Parser(tag)}
                </li>
              );
            })}
          </ul>
        </footer>
      </div>
    </Link>
  );
}
