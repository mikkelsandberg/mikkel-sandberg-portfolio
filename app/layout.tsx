import '@/app/styles/app.scss';
import '@/app/styles/reset.scss';
import '@/app/styles/structure.scss';
import '@/app/styles/tags.scss';
import '@/app/styles/variables.scss';
import BasePage from '@/app/ui/BasePage/BasePage';
import Parser from 'html-react-parser';
import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Mikkel Sandberg | Full Stack Developer',
  description: Parser('This is Mikkel Sandberg&rsquo;s website. He is a full stack developer, and this site features some of his recent work.') as string,
  alternates: {
    canonical: 'https://mikkelsandberg.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={firaSans.className}><BasePage>{children}</BasePage></body>
    </html>
  );
}
