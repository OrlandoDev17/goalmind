import FeatureCards from '@/components/FeatureCards';
import SectionContainer from '@/components/SectionContainer';

export default function Features() {
  return (
    <SectionContainer
      id="features"
      className="bg-gradient-to-b from-blue-50 to-gray-100 gap-12 pb-24"
    >
      <div className="flex flex-col items-center justify-center mt-8 gap-6">
        <h2 className="text-4xl font-bold font-inter">
          Potencia tus objetivos con inteligencia
        </h2>
        <p className="text-lg w-220 text-center text-gray-600 font-semibolds">
          GoalMind combian tecnología avanzada con psicología del comportamiento
          para ayudarte a alcanzar tus metas
        </p>
      </div>
      <FeatureCards />
    </SectionContainer>
  );
}
