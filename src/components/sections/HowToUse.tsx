import Button from '@/components/ui/Button';
import { RightArrowIcon } from '@/components/Icons';
import SectionContainer from '@/components/ui/SectionContainer';
import { STEPS_TO_USE } from '@/consts/Consts';
import Paragraph from '@/components/ui/Paragraph';

export default function HowToUse() {
  return (
    <SectionContainer className="bg-white xl:flex-row gap-16 2xl:gap-56 mt-18 pb-12  mx-36">
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
                <Paragraph className="text-start">{description}</Paragraph>
              </div>
            </article>
          ))}
        </div>
        <Button color="white" className="max-w-64 text-lg">
          Comenzar Ahora
          <RightArrowIcon className="size-8" />
        </Button>
      </aside>
      <div className="bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-600 w-76 h-46 sm:w-104 sm:h-64 md:w-156 md:h-96 rounded-lg flex items-end">
        <span className="p-4 text-xl text-white font-semibold font-inter">
          Dashboard Intuitivo y Personalizado
        </span>
      </div>
    </SectionContainer>
  );
}
