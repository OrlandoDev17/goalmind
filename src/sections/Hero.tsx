import SectionContainer from '@/components/SectionContainer';
import ParticlesCanvas from '@/components/ParticleCanvas';
import Welcome from '@/components/Welcome';

export default function Hero() {
  return (
    <SectionContainer
      id="hero"
      className="flex flex-col items-center justify-center h-[60vh] bg-blue-50"
    >
      <ParticlesCanvas />
      <Welcome />
    </SectionContainer>
  );
}
