import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({
  children,
  id,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center  ${className}`}
    >
      {children}
    </section>
  );
}
