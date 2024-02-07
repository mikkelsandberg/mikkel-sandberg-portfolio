'use client';

import Header from '@/app/ui/Header/Header';
import WorkFilters from '@/app/ui/WorkFilters/WorkFilters';
import WorkItems from '@/app/ui/WorkItems/WorkItems';
import { useState } from 'react';

export default function Page() {
  const [workFilter, setWorkFilter] = useState('show-all');

  return (
    <section className="contentWrapper">
      <Header text="My Work" />
      <WorkFilters workFilter={workFilter} setWorkFilter ={setWorkFilter} />
      <WorkItems activeFilter={workFilter} />
    </section>
  );
}