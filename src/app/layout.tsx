import localFont from 'next/font/local';
import { Hanuman } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import QueryProviders from '@/providers/react-query/queryProviders';
import AuthProvider from '@/providers/auth/AuthProvider';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--pretendard',
});

const hanuman = Hanuman({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hanuman',
});

export const metadata: Metadata = {
  title: 'We Write',
  description: 'We Write',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body
        className={`flex min-h-screen flex-col ${pretendard.variable} ${hanuman.variable} antialiased`}
      >
        <QueryProviders>
          <AuthProvider>
            <Toaster />
            <header></header>

            <main>{children}</main>
          </AuthProvider>
        </QueryProviders>
      </body>
    </html>
  );
};

export default RootLayout;
