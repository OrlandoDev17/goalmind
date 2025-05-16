import { TargetIcon } from '@/components/Icons';
import { ChartIcon } from '@/components/Icons';
import { BrainIcon } from '@/components/Icons';

interface FeaturesProps {
  id: number;
  icon: any;
  title: string;
  description: string;
}

export const FEATURES_INFO = [
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
