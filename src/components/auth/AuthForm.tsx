'use client';

import RemenberMe from './RemenberMe';
import { FORM_FIELDS } from '@/consts/Consts';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AuthButton from './AuthButton';

export default function AuthForm({ type }: { type: 'login' | 'register' }) {
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const { login, register, loading, error } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const { email = '', password = '', fullName = '' } = formValues;

    if (!email || !password || (type === 'register' && !fullName)) {
      alert('Por favor completa los campos requeridos');
    }

    if (type === 'login') {
      await login(email, password);
    } else {
      await register(email, password, fullName);
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {FORM_FIELDS.filter(
        ({ type: fieldType }) => !fieldType || fieldType === type
      ).map(({ label, placeholder, inputType, id }) => (
        <div className="flex flex-col gap-2" key={id}>
          <label className="font-semibold text-lg" htmlFor={id}>
            {label}
          </label>
          <input
            className="outline-0 border-2 border-zinc-200 p-2 rounded-md"
            type={inputType}
            id={id}
            placeholder={placeholder}
            value={formValues[id] || ''}
            onChange={handleChange}
          />
        </div>
      ))}
      {type === 'login' && <RemenberMe />}

      <AuthButton type={type} loading={loading} />

      {error && <p>{error}</p>}
    </form>
  );
}
