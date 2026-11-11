import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { SiteShell } from './site-shell';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: { default: 'Nếp Technologies — Less busywork. More business.', template: '%s | Nếp Technologies' },
  description: 'A fictional Vietnamese applied-AI startup concept helping SMEs make better use of their existing tools, data, and workflows.',
  openGraph: { title: 'Nếp Technologies', description: 'Less busywork. More business.', type: 'website', images: ['/og.svg'] },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={GeistSans.variable}><body><SiteShell>{children}</SiteShell></body></html>;
}
