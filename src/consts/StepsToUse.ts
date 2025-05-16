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
