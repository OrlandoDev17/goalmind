import { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

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
    'GoalMind es una plataforma moderna que ayuda a los usuarios a establecer, visualizar y alcanzar objetivos con tecnología avanzada. A través de IA y datos inteligentes, el sistema ofrece recomendaciones personalizadas para mejorar el progreso en cualquier área: productividad, aprendizaje, hábitos saludables, etc.',
  icons: {
    icon: './images/logo-GoalMind.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${montserrat.variable} ${inter.variable} antialiased`}>
        <Header />
        <main className="relative top-23">{children}</main>
      </body>
    </html>
  );
}
