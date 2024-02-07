import { formatText } from '@/app/lib/HelperFunctions';
import { WorkData, WorkDataType } from '@/app/lib/WorkData';
import WorkItem from '@/app/ui/WorkItem/WorkItem';
import '@/app/ui/WorkItems/WorkItems.scss';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useCallback, useMemo } from 'react';

type WorkItemsProps = {
  numItems?: number;
  activeFilter: string;
};

export default function WorkItems({ activeFilter, numItems }: WorkItemsProps) {
  const filteredWorkItems = useMemo(() => {
    let filteredWork;

    if (activeFilter === 'show-all') {
      filteredWork = WorkData;
    } else {
      filteredWork = WorkData.filter(item => {
        const tagsStandardized = item.tags.map(tag => {
          return formatText(tag);
        });

        return tagsStandardized.includes(activeFilter);
      });
    }

    return filteredWork;
  }, [activeFilter]);

  const getWorkItems = useCallback((length: number, inputArray: WorkDataType[]) => {
    const outputArray = [];

    for (let i = 0; i < length; i++) {
      let item = inputArray[i];
      outputArray.push(<WorkItem key={item.id} item={item} />);
    }

    return outputArray;
  }, []);

  const addWorkItems = useCallback(() => {
    const workItems: React.ReactNode[] = [];

    if (numItems !== undefined) {
      workItems.push(...getWorkItems(numItems, WorkData));

      workItems.push(
        <Link href="/my-work" key="seeAll" className="seeAll__wrapper workItem">
          <p className="seeAll__text">
            See All
            <FontAwesomeIcon icon={faArrowCircleRight} className="seeAll__icon" />
          </p>
        </Link>
      );

      return workItems;
    }

    workItems.push(getWorkItems(filteredWorkItems.length, filteredWorkItems));

    return workItems;
  }, [filteredWorkItems, getWorkItems, numItems]);

  return <section className="work__wrapper">{<div className="work__inner">{addWorkItems()}</div>}</section>;
}
