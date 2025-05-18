import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  size?: string;
}

export default function Button({
  children,
  className,
  href,
  size,
}: ButtonProps) {
  return (
    <a
      className={`flex gap-2 cursor-pointer bg-blue-500 px-6 py-3 rounded-lg text-white text-${size} font-semibold shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
