import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Shadrac Reyes',
    default: 'Shadrac Reyes - Software developer',
  },
  description: 'I’m Shadrac Reyes. I am a software developer based in Utah. I love snowboarding and building products.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='h-full antialiased' suppressHydrationWarning>
      <body className='flex h-full bg-zinc-50 dark:bg-black'>
        <Providers>
          <div className='flex w-full'>
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
