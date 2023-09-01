import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

import Layout from '~/lib/layout';

import '~/lib/styles/globals.css';

const body = Outfit({ subsets: ['latin'], variable: '--font-body' });

const APP_NAME = 'nextarter-park';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js App with TypeScript setup',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={body.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
