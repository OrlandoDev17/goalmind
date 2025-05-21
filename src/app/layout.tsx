import { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import LayoutWrapper from './layoutWrapper';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GoalMind',
  description:
    'GoalMind es una plataforma moderna que ayuda a los usuarios a establecer, visualizar y alcanzar objetivos con tecnología avanzada.',
  icons: {
    icon: './images/logo-GoalMind.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
