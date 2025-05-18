import FeatureCards from '@/components/ui/FeatureCards';
import Paragraph from '@/components/ui/Paragraph';
import SectionContainer from '@/components/ui/SectionContainer';

export default function Features() {
  return (
    <SectionContainer
      id="features"
      className="bg-gradient-to-b from-blue-50 to-gray-100 gap-12 pb-24"
    >
      <div className="flex flex-col items-center justify-center mt-8 gap-6 px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter text-center">
          Potencia tus objetivos con inteligencia
        </h2>
        <Paragraph>
          GoalMind combian tecnología avanzada con psicología del comportamiento
          para ayudarte a alcanzar tus metas
        </Paragraph>
      </div>
      <FeatureCards />
    </SectionContainer>
  );
}
