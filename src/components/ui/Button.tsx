import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string | Url;
  size?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  href,
  size,
  onClick,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        className={`flex items-center gap-2 cursor-pointer bg-blue-500 px-6 py-3 rounded-lg text-white text-${size} font-semibold hover:bg-blue-700 hover:-translate-y-1 transition ${className}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 cursor-pointer bg-blue-500 px-6 py-3 rounded-lg text-white text-${size} font-semibold hover:bg-blue-700 hover:-translate-y-1 transition ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
