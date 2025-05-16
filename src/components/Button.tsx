import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
}

export default function Button({ children, className, href }: ButtonProps) {
  return (
    <a
      className={`flex max-w-64 gap-2 cursor-pointer bg-blue-500 px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
