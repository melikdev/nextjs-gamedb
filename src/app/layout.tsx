import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import Navbar from '@/components/Navbar';
import { Arimo } from 'next/font/google';

const arimo = Arimo({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gamecritic',
  description: 'Gamecritic is blabla',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
