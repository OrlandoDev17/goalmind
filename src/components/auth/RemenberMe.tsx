'use client';

import { useId } from 'react';

export default function RemenberMe() {
  const checkboxId = useId();

  return (
    <div className="flex items-center justify-between">
      <label
        className="flex items-center justify-center gap-2"
        htmlFor={checkboxId}
      >
        <input className="size-5" type="checkbox" id={checkboxId} />
        Recordarme
      </label>
      <p className="text-blue-500 font-medium">¿Olvidaste tu contraseña?</p>
    </div>
  );
}
