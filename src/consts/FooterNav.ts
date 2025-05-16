interface FooterNavProps {
  title: string;
  href: string;
}

export const FOOTER_LINKS: FooterNavProps[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Definir Metas',
    href: '/metas',
  },
  {
    title: 'Análisis',
    href: '/analisis',
  },
  {
    title: 'Recomendaciones',
    href: '/recomendaciones',
  },
] as const;
