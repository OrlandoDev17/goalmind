import { RightArrowIcon } from './Icons';
import Button from '@/components/ui/Button';

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10">
      <h1 className="text-6xl font-bold text-blue-500 z-10">
        Goal<span className="text-black">Mind</span>
      </h1>
      <p className="text-2xl text-gray-600 max-w-100 md:max-w-200 text-center">
        Visualiza, planifica y alcanza tus objetivos con el poder de la
        inteligencia artificial
      </p>
      <div className="flex gap-4 z-10">
        <Button className="text-sm xl:text-lg" href="/goals">
          Comenzar Ahora
          <RightArrowIcon className="size-6" />
        </Button>
        <a
          className="bg-white px-3 py-2 xl:px-6 xl:py-3 rounded-lg border-1 border-gray-200 text-sm xl:text-lg font-semibold shadow-lg hover:bg-green-200 hover:-translate-y-1 transition"
          href="#features"
        >
          Descubrir Más
        </a>
      </div>
    </div>
  );
}
