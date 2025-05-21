'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith('/auth');

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header />}
      <main className={`${!hideLayout && 'relative top-19 flex-1'}`}>
        {children}
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}
