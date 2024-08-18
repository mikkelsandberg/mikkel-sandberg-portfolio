import Header from '@/app/ui/Header/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    m: process.env.M || '',
    k: process.env.K || '',
  },
};

export default function Page() {
  return (
    <section className="contentWrapper">
      {/* A test page */}
      <Header text="Test" />
    </section>
  );
}