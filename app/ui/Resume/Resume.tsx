import { resumeUrl } from '@/app/lib/Constants';
import '@/app/ui/Resume/Resume.scss';
import clsx from 'clsx';
import Parser from 'html-react-parser';

export enum ResumeDisplayType {
  link = 'link',
  button = 'button'
}

type ResumeProps = {
  className?: string;
  displayText?: string;
  displayType: ResumeDisplayType;
};

export default function Resume({ className, displayText, displayType }: ResumeProps) {
  return (
    <a className={clsx(className, `downloadResume__${displayType.toString()}`)} href={resumeUrl} target="_blank" rel="noopener noreferrer">
      {displayText || Parser('View R&eacute;sum&eacute;')}
    </a>
  );
}