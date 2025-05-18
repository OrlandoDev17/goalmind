'use client';

import { useState } from 'react';

import { MoonIcon } from '@/components/Icons';

import ResponsiveHeader from './ResponsiveHeader';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

import { NAV_INPUTS } from '@/consts/HeaderNav';

export default function Header() {
  const [activeInput, setActiveInput] = useState<{
    input: string;
    href: string;
  }>(NAV_INPUTS[0]);

  const handleInputClick = (inputObj: { input: string; href: string }) => {
    setActiveInput(inputObj);
  };

  return (
    <header className="fixed w-full flex items-center justify-between py-2 px-10 md:px-24 xl:px-36 border-b-2 border-gray-200 z-100 backdrop-blur-2xl">
      <a href="" className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          src={'./images/logo-GoalMind.svg'}
          alt="Logo de GoalMind"
        />
        <h3 className="text-2xl font-bold text-blue-500">
          Goal<span className="text-black">Mind</span>
        </h3>
      </a>
      <nav className="hidden xl:block">
        <ul className="flex gap-4 ml-12">
          {NAV_INPUTS.map((inputObj, index) => (
            <li key={index}>
              <Link
                className={`text-lg font-inter hover:text-blue-500 ${
                  activeInput.input === inputObj.input ? 'text-blue-500' : ''
                }`}
                href={inputObj.href}
                onClick={() => handleInputClick(inputObj)}
              >
                {inputObj.input}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <MoonIcon className="size-7" />
        <Button className="hidden xl:flex" size="base">
          Iniciar Sesión
        </Button>
        <ResponsiveHeader />
      </div>
    </header>
  );
}
