interface HeaderNavProps {
  input: string;
  href: string;
}

export const NAV_INPUTS = [
  {
    input: 'Inicio',
    href: '#',
  },
  {
    input: 'Dashboard',
    href: '/dashboard',
  },
  {
    input: 'Metas',
    href: '/metas',
  },
  {
    input: 'Análisis',
    href: '/analisis',
  },
  {
    input: 'Contacto',
    href: '/contacto',
  },
] as const;
