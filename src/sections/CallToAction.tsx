import Button from '@/components/Button';
import { RightArrowIcon } from '@/components/Icons';
import SectionContainer from '@/components/SectionContainer';

export default function CallToAction() {
  return (
    <SectionContainer className="mt-12 bg-blue-500 gap-8">
      <h2 className="mt-12 text-3xl font-bold text-white">
        Comienza tu viaje hacia el éxito hoy mismo
      </h2>
      <p className="text-gray-100 text-xl">
        Únete a miles de personas que ya están alcanzando sus metas con GoalMind
      </p>
      <Button className="bg-primary hover:bg-primary/90 mb-12">
        Comenzar Gratis
        <RightArrowIcon />
      </Button>
    </SectionContainer>
  );
}
