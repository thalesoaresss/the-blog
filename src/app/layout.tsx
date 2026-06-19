import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Blog',
  description:
    'A blog built with Next.js 13, TypeScript, Tailwind CSS, and MDX.',
};
type RootLayoutProps = {
  children: React.ReactNode;
};
//TODO: configurar dark mode
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR' className=''>
      <body>{children}</body>
    </html>
  );
}
