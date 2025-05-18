import { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={`text-base md:text-lg max-w-150 lg:max-w-220 text-zinc-600 font-semibolds ${className}`}
    >
      {children}
    </p>
  );
}
