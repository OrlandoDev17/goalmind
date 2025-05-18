import Paragraph from './Paragraph';
import { useId } from 'react';

export default function Modal() {
  const titleId = useId();

  return (
    <article className="absolute left-150 bg-white border-2 border-zinc-600 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold">Crear nuevo objetivo</h3>
        <Paragraph className="md:text-base">
          Define un nuevo objetivo usando el asistente de IA para maximizar tus
          posibilidades de éxito.
        </Paragraph>
      </div>
      <form className="flex flex-col gap-2">
        <label className="font-inter tracking-wide" htmlFor={titleId}>
          Titulo del objetivo
        </label>
        <input
          className="outline-0 border-2 border-zinc-200 rounded-md p-2 focus:border-primary"
          type="text"
          placeholder="Ej. Aprender a programar en JavaScript"
          id={titleId}
        />
      </form>
    </article>
  );
}
