interface HeaderNavProps {
  input: string;
  href: string;
}

export const NAV_INPUTS: HeaderNavProps[] = [
  {
    input: 'Inicio',
    href: '#',
  },
  {
    input: 'Metas',
    href: '/metas',
  },
  {
    input: 'Dashboard',
    href: '/dashboard',
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
