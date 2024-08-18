import Header from '@/app/ui/Header/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    m: process.env.NEXT_PUBLIC_M || 'hard_coded1',
    k: process.env.NEXT_PUBLIC_K || 'hard_coded2',
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