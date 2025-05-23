import {
  TargetIcon,
  BrainIcon,
  ChartIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  XIcon,
} from '@/components/Icons';

interface HeaderNavProps {
  input: string;
  href: string;
}

export const NAV_INPUTS: HeaderNavProps[] = [
  {
    input: 'Inicio',
    href: '/',
  },
  {
    input: 'Metas',
    href: '/goals',
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

interface FeaturesProps {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

export const FEATURES_INFO: FeaturesProps[] = [
  {
    id: 1,
    icon: TargetIcon,
    title: 'Objetivos Inteligentes',
    description:
      'Establece metas SMART con asistencia de IA que te ayuda a definir objetivos realistas y alcanzables',
  },
  {
    id: 2,
    icon: ChartIcon,
    title: 'Análisis de Progreso',
    description:
      'Visualiza tu avance con gráficos dinámicos y obtén insights personalizados sobre tu rendimiento',
  },
  {
    id: 3,
    icon: BrainIcon,
    title: 'Recomendaciones con IA',
    description:
      'Recibe sugerencias personalizadas basadas en tus patrones de comportamiento y preferencias',
  },
] as const;

interface StepsProps {
  id: number;
  title: string;
  description: string;
}

export const STEPS_TO_USE: StepsProps[] = [
  {
    id: 1,
    title: 'Define tus Objetivos',
    description:
      'Establece metas claras y específicas con nuestro asistente de IA',
  },
  {
    id: 2,
    title: 'Visualiza tu Progreso',
    description:
      'Monitorea tu avance con gráficos interactivos y estadísticas en tiempo real',
  },
  {
    id: 3,
    title: 'Recibe Recomendaciones',
    description: 'Obtén sugerencias personalizadas para optimizar tu tiempo',
  },
] as const;

interface SocialMediaProps {
  id: string;
  icon: React.ElementType;
  href: string;
}

export const SOCIAL_LINKS: SocialMediaProps[] = [
  {
    id: 'whatsapp',
    icon: WhatsappIcon,
    href: 'https://wa.me/+584242860846',
  },
  {
    id: 'instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com',
  },
  {
    id: 'x-twitter',
    icon: XIcon,
    href: 'https://x.com',
  },
  {
    id: 'github',
    icon: GithubIcon,
    href: 'https://github.com/OrlandoDev17',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    href: 'www.linkedin.com/in/orlando-lópez1707',
  },
] as const;

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

interface FormFieldsProps {
  label: string;
  placeholder: string;
  inputType: string;
  id: string;
  type?: 'login' | 'register';
}

export const FORM_FIELDS: FormFieldsProps[] = [
  {
    label: 'Nombre Completo',
    placeholder: 'Orlando López',
    inputType: 'text',
    id: 'fullName',
    type: 'register',
  },
  {
    label: 'Email',
    placeholder: 'tu@email.com',
    inputType: 'email',
    id: 'email',
  },
  {
    label: 'Contraseña',
    placeholder: '••••••••',
    inputType: 'password',
    id: 'password',
  },
] as const;
