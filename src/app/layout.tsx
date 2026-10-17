import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#101210',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Greenstone Landscaping Tampa',
    default: 'Greenstone Landscaping | Premium Landscape Design & Outdoor Living in Tampa, FL',
  },
  description:
    'Thoughtfully designed landscapes, bespoke stone patios, lush subtropical gardens, and estate lawn maintenance in Tampa, Florida. A portfolio demonstration concept by Brandspire.',
  keywords: [
    'Tampa landscaping',
    'landscape design Tampa FL',
    'South Tampa landscape contractor',
    'hardscaping patios Tampa',
    'outdoor living spaces Tampa',
    'Florida friendly garden design',
    'estate lawn care Tampa',
  ],
  authors: [{ name: 'Brandspire Agency' }],
  metadataBase: new URL('https://greenstone-landscaping-demo.example'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://greenstone-landscaping-demo.example',
    siteName: 'Greenstone Landscaping',
    title: 'Greenstone Landscaping | Premium Landscape Design in Tampa, FL',
    description:
      'Transform your outdoor space with tailored landscape master planning, travertine patios, and native Florida botanicals.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Greenstone Landscaping Luxury Outdoor Living Demo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased font-sans selection:bg-accent selection:text-bg-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
