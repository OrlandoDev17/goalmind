'use client';

import { useState } from 'react';

import { SunIcon, MoonIcon, UserIcon } from '@/components/Icons';

import ResponsiveHeader from './ResponsiveHeader';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from '@/hooks/useSession';
import { useAuth } from '@/hooks/useAuth';

import { NAV_INPUTS } from '@/consts/Consts';

export default function Header() {
  const [activeInput, setActiveInput] = useState<{
    input: string;
    href: string;
  }>(NAV_INPUTS[0]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { session } = useSession();
  const { logout } = useAuth();

  const handleInputClick = (inputObj: { input: string; href: string }) => {
    setActiveInput(inputObj);
  };

  const handleThemeMode = () => {
    setIsDarkMode(!isDarkMode);
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
        {isDarkMode === true ? (
          <div
            onClick={handleThemeMode}
            className="bg-green-300 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition cursor-pointer"
          >
            <SunIcon className="size-8" />
          </div>
        ) : (
          <div
            onClick={handleThemeMode}
            className="bg-green-300 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition cursor-pointer"
          >
            <MoonIcon className="size-8" />
          </div>
        )}
        {!session ? (
          <>
            <Button
              href="/auth/login"
              className="hidden xl:flex border-2 bg-white border-zinc-200 hover:bg-green-300"
            >
              Iniciar Sesión
            </Button>
            <Button
              color="white"
              href="/auth/register"
              className="hidden xl:flex"
            >
              Registrarse
            </Button>
          </>
        ) : (
          <div
            onClick={logout}
            className="bg-green-300 p-2 rounded-full hover:scale-110 hover:bg-green-400 transition cursor-pointer"
          >
            <UserIcon className="size-8" />
          </div>
        )}
        <ResponsiveHeader />
      </div>
    </header>
  );
}
