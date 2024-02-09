import { formatText } from '@/app/lib/HelperFunctions';
import { WorkData, WorkDataType } from '@/app/lib/WorkData';
import '@/app/my-work/[slug]/WorkDetails.scss';
import NotFound from '@/app/not-found';
import WorkDescription from '@/app/ui/WorkDescription/WorkDescription';
import WorkImages from '@/app/ui/WorkImages/WorkImages';

export async function generateStaticParams() {
  return WorkData.map(item => ({slug: `${formatText(item.workLabel)}-${formatText(item.workTitle)}`}));
}

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
        <NotFound />
      );
    } else {
      const workData = WorkData[filteredWork().current];

      const prevFormatted = `${formatText(WorkData[filteredWork().prev].workLabel)}-${formatText(
        WorkData[filteredWork().prev].workTitle
      )}`;

      const nextFormatted = `${formatText(WorkData[filteredWork().next].workLabel)}-${formatText(
        WorkData[filteredWork().next].workTitle
      )}`;

      return (
        <section className="workDetails">
          <WorkImages workData={workData} />
          <WorkDescription
            workData={workData}
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
