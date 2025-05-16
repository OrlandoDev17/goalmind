import Button from '@/components/Button';
import { RightArrowIcon } from '@/components/Icons';
import SectionContainer from '@/components/SectionContainer';
import { STEPS_TO_USE } from '@/consts/StepsToUse';

export default function HowToUse() {
  return (
    <SectionContainer className="bg-white flex-row gap-56 mt-18 pb-12">
      <aside className="flex flex-col justify-center gap-8">
        <h2 className="text-3xl font-bold">Cómo Funciona GoalMind</h2>
        <div className="flex flex-col items-stretch justify-center gap-6 w-full">
          {STEPS_TO_USE.map(({ id, title, description }) => (
            <article key={id} className="flex items-center gap-4 w-full">
              <span className="bg-blue-500 size-10 flex items-center justify-center rounded-full text-white text-xl font-semibold flex-shrink-0">
                {id}
              </span>
              <div className="flex flex-col justify-center w-full">
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-base text-gray-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
        <Button>
          Comenzar Ahora
          <RightArrowIcon className="size-8" />
        </Button>
      </aside>
      <div className="bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 w-156 h-96 rounded-lg flex items-end">
        <span className="p-4 text-xl text-white font-semibold font-inter">
          Dashboard Intuitivo y Personalizado
        </span>
      </div>
    </SectionContainer>
  );
}
