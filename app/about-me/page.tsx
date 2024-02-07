import AboutMe from '@/app/ui/AboutMe/AboutMe';
import Header from '@/app/ui/Header/Header';

export default function Page() {

  return (
    <section className="contentWrapper">
      <Header text="About Me" />
      <AboutMe />
    </section>
  );
}
