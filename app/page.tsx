'use client';

import AboutMe from '@/app/ui/AboutMe/AboutMe';
import Header from '@/app/ui/Header/Header';
import SplashScreen from '@/app/ui/SplashScreen/SplashScreen';
import WorkItems from '@/app/ui/WorkItems/WorkItems';

export default function Home() {
  return (
    <div className="homePage">
      <SplashScreen />
      <section className="contentWrapper">
        <Header text="My Work" />
        <WorkItems activeFilter="show-all" numItems={3} />
        <Header text="About Me" />
        <AboutMe />
      </section>
    </div>
  );
}
