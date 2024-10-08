import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto } from 'next/font/google';
import './globals.scss';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'], 
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}>{children}</body>
    </html>
  );
}
