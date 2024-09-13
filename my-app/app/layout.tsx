import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import SessionWrapper from './components/SessionWrapper';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500'],
});

export const metadata: Metadata = {
  title: 'NestQuest',
  description: 'A platform for finding your next Staycation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={raleway.className}>{children}</body>
      </html>
    </SessionWrapper>
  );
}
