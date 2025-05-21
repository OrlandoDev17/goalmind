'use client';

import { useId } from 'react';
import { BrainIcon } from '@/components/Icons';
import Paragraph from '@/components/ui/Paragraph';

export default function LoginPage() {
  const emailId = useId();
  const passwordId = useId();
  const checkboxId = useId();

  return (
    <section className="h-screen bg-blue-50 flex justify-center items-center">
      <article className="rounded-lg p-8 border-2 border-zinc-200 bg-white flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <BrainIcon className="text-blue-500 bg-blue-100 p-2 size-14 rounded-full" />
          <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
            Iniciar Sesión
          </h2>
          <Paragraph>
            Ingresa tus credenciales para acceder a tu cuenta
          </Paragraph>
        </div>
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-2">
            <label
              className="font-inter font-semibold text-lg"
              htmlFor={emailId}
            >
              Email
            </label>
            <input
              className="outline-0 border-2 border-zinc-200 p-2 rounded-md"
              type="email"
              id={emailId}
              placeholder="tu@email.com"
            />
          </form>
          <form className="flex flex-col gap-2">
            <label
              className="font-inter font-semibold text-lg"
              htmlFor={passwordId}
            >
              Contraseña
            </label>
            <input
              className="outline-0 border-2 border-zinc-200 p-2 rounded-md"
              type="email"
              id={passwordId}
              placeholder="tu@email.com"
            />
          </form>
          <div className="flex items-center justify-between">
            <label
              className="flex items-center justify-center gap-2"
              htmlFor={checkboxId}
            >
              <input className="size-5" type="checkbox" id={checkboxId} />
              Recordarme
            </label>
            <p className="text-blue-500">¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </article>
    </section>
  );
}
