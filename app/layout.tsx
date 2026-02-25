import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Trova — Cannabis Sales CRM',
  description: 'The CRM built for how cannabis reps actually sell. Never lose a sale because you forgot to follow up.',
  openGraph: {
    title: 'Trova — Cannabis Sales CRM',
    description: 'The CRM built for how cannabis reps actually sell. Never lose a sale because you forgot to follow up.',
    url: 'https://terratrack-66zj.vercel.app',
    siteName: 'Trova',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
