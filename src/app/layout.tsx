// app/layout.tsx
import type { Metadata } from 'next';
import { CartProvider } from '@/context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Temp Vents: Temporary covers, cleaner than all the others',
  description: 'Professional vent protection solutions for home remodeling, construction, and more.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}