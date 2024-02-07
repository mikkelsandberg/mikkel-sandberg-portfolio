import { Filters } from '@/app/lib/Filters';
import { formatText } from '@/app/lib/HelperFunctions';
import '@/app/ui/WorkFilters/WorkFilters.scss';
import { Dispatch, SetStateAction } from 'react';

type WorkFiltersProps = {
  workFilter: string;
  setWorkFilter: Dispatch<SetStateAction<string>>;
};

export default function WorkFilters({ workFilter, setWorkFilter }: WorkFiltersProps) {
  return (
    <ul className="filters__list">
      {Filters.map(filter => {
        return (
          <li
            key={filter.id}
            onClick={(e) => setWorkFilter(formatText(e.currentTarget.innerHTML))}
            className={`filter${workFilter === formatText(filter.name) ? ' filter--active' : ''} filter--${
              filter.color
            }`}
          >
            {filter.name}
          </li>
        );
      })}
    </ul>
  );
}
