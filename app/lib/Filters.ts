type FilterType = {
  id: number;
  name: string;
  color: string;
};

export const Filters: FilterType[] = [
  {
    id: 0,
    name: 'Show all',
    color: 'red'
  },
  {
    id: 1,
    name: 'Development',
    color: 'yellow'
  },
  {
    id: 2,
    name: 'Design',
    color: 'purple'
  },
  {
    id: 3,
    name: 'Podcast production',
    color: 'green'
  },
  {
    id: 4,
    name: 'Video production',
    color: 'blue'
  },
  {
    id: 5,
    name: 'Animation',
    color: 'orange'
  }
];
