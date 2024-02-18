import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './common/header';
import Body from './body/page';
import About from './about/page';
import Waitlist from './waitlist/page';
import Footer from './common/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tradely',
  description: 'Website of Tradely Social',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <Header />
        <Body />
        <About />
        {/* <Waitlist /> */}
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
