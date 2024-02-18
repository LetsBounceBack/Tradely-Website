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
  description:
    'Transparency. Trades. Together. Social media platform designed for retail by retail.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='hmwr3O6J4HEPzjq0ZYhNHi3_q7OmFiSUtbaGMBEU-gY'
        />
      </head>
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
