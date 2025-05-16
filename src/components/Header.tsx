'use client';

import { useState } from 'react';
import { MoonIcon } from './Icons';
import ResponsiveHeader from './ResponsiveHeader';
import Button from './Button';

const NAV_INPUTS = [
  {
    input: 'Inicio',
    href: '#',
  },
  {
    input: 'Dashboard',
    href: '/dashboard',
  },
  {
    input: 'Metas',
    href: '/metas',
  },
  {
    input: 'Análisis',
    href: '/analisis',
  },
  {
    input: 'Contacto',
    href: '/contacto',
  },
];

export default function Header() {
  const [activeInput, setActiveInput] = useState(NAV_INPUTS[0]);

  const handleInputClick = (inputObj: { input: string; href: string }) => {
    setActiveInput(inputObj);
  };

  return (
    <header className="fixed w-full bg-white flex items-center justify-between py-4 px-36 shadow-sm z-100">
      <a href="" className="flex items-center gap-2">
        <img className="w-10" src={'./images/logo-GoalMind.svg'} />
        <h3 className="text-2xl font-bold text-blue-500">
          Goal<span className="text-black">Mind</span>
        </h3>
      </a>
      <nav className="hidden xl:block">
        <ul className="flex gap-4 ml-12">
          {NAV_INPUTS.map((inputObj, index) => (
            <li key={index}>
              <a
                className={`text-xl font-inter hover:text-blue-500 ${
                  activeInput.input === inputObj.input ? 'text-blue-500' : ''
                }`}
                href={inputObj.href}
                onClick={() => handleInputClick(inputObj)}
              >
                {inputObj.input}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden xl:flex items-center gap-4">
        <MoonIcon className="size-7" />
        <Button href="#">Iniciar Sesión</Button>
      </div>
      <ResponsiveHeader />
    </header>
  );
}
