'use client';

import Paragraph from '@/components/ui/Paragraph';
import GoalModal from '@/components/GoalModal';

export default function Goals() {
  return (
    <section className="flex flex-col justify-center items-center px-36 pt-12">
      <header className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold">Objetivos</h2>
          <Paragraph className="md:text-xl">
            Gestiona y visualiza todos tus objetivos en un solo lugar.
          </Paragraph>
        </div>
        <div>
          <GoalModal />
        </div>
      </header>
    </section>
  );
}
