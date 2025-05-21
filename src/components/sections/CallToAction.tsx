import Button from '@/components/ui/Button';
import { RightArrowIcon } from '@/components/Icons';
import SectionContainer from '@/components/ui/SectionContainer';

export default function CallToAction() {
  return (
    <SectionContainer className="mt-12 bg-blue-500 gap-8 px-8">
      <h2 className="mt-12 text-2xl md:text-3xl font-bold text-white text-center">
        Comienza tu viaje hacia el éxito hoy mismo
      </h2>
      <p className="text-gray-100 text-lg md:text-xl text-center">
        Únete a miles de personas que ya están alcanzando sus metas con GoalMind
      </p>
      <Button color="white" className="bg-primary hover:bg-primary/90 mb-12">
        Comenzar Gratis
        <RightArrowIcon />
      </Button>
    </SectionContainer>
  );
}
