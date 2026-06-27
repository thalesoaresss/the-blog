import type { Metadata } from 'next';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The blog',
    template: 'The blog - %s ',
  },
  description:
    'A blog built with Next.js 13, TypeScript, Tailwind CSS, and MDX.',
};
type RootLayoutProps = {
  children: React.ReactNode;
};
//TODO: configurar dark mode no className do html
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR' className=''>
      <body>
        <Container>
          <Header />

          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
