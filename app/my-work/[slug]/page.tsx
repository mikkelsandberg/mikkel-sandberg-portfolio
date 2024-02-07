import { formatText } from '@/app/lib/HelperFunctions';
import { WorkData, WorkDataType } from '@/app/lib/WorkData';
import '@/app/my-work/[slug]/WorkDetails.scss';
import Header from '@/app/ui/Header/Header';
import NotFound from '@/app/ui/NotFound/NotFound';
import WorkDescription from '@/app/ui/WorkDescription/WorkDescription';
import WorkImages from '@/app/ui/WorkImages/WorkImages';

export default function Page({params}: {params: {slug: string}}) {
  function findWorkItem(item: WorkDataType, matchItem: string) {
    let formattedName = `${formatText(item.workLabel)}-${formatText(item.workTitle)}`;

    return formattedName === matchItem;
  }

  function getIndexOfWorkItem() {
    let index;

    index = WorkData.findIndex(item => {
      return findWorkItem(item, params.slug);
    });

    return index;
  }

  function filteredWork() {
    const workItemObj = {
      prev: (getIndexOfWorkItem() + WorkData.length - 1) % WorkData.length,
      current: getIndexOfWorkItem(),
      next: (getIndexOfWorkItem() + 1) % WorkData.length
    };

    return workItemObj;
  }

  function showWork() {
    if (filteredWork().current === -1) {
      return (
        <section className="contentWrapper">
          <Header text="Not Found" />
          <NotFound />
        </section>
      );
    } else {
      const { workLabel, workTitle, images, description, skills, links } = WorkData[filteredWork().current];

      const prevFormatted = `${formatText(WorkData[filteredWork().prev].workLabel)}-${formatText(
        WorkData[filteredWork().prev].workTitle
      )}`;

      const nextFormatted = `${formatText(WorkData[filteredWork().next].workLabel)}-${formatText(
        WorkData[filteredWork().next].workTitle
      )}`;

      return (
        <section className="workDetails">
          <WorkImages images={images} workLabel={workLabel} workTitle={workTitle} />
          <WorkDescription
            workTitle={workTitle}
            workLabel={workLabel}
            description={description}
            skills={skills}
            links={links}
            currentNum={filteredWork().current + 1}
            numItems={WorkData.length}
            linkToPrev={prevFormatted}
            linkToNext={nextFormatted}
          />
        </section>
      );
    }
  }

  return showWork();
}
