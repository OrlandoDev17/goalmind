'use client';

import { useId, useState } from 'react';
import { BarsIcon, MoonIcon } from './Icons';
import { NAV_INPUTS } from '@/consts/HeaderNav';
import Button from './Button';

export default function ResponsiveHeader() {
  const [isChecked, setIsChecked] = useState(false);

  const menuCheckboxId = useId();

  const handleShowMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 xl:hidden">
        <MoonIcon className=" size-12 cursor-pointer p-2 rounded-lg hover:bg-green-400 hover:text-white hover:scale-110 transition" />
        <label
          className="menu-button"
          onClick={handleShowMenu}
          htmlFor={menuCheckboxId}
        >
          <BarsIcon className=" size-12 cursor-pointer p-2 rounded-lg hover:bg-green-400 hover:text-white hover:scale-110 transition" />
        </label>

        <input type="checkbox" id={menuCheckboxId} hidden />
      </div>

      {isChecked && (
        <aside className="menu fixed top-19 right-0 bg-white w-full h-screen z-100 flex flex-col gap-4 p-8">
          <nav>
            <ul className="flex flex-col gap-4">
              {NAV_INPUTS.map(({ input, href }) => (
                <li key={input}>
                  <a
                    className="block p-3 rounded-lg text-lg font-inter font-semibold hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition"
                    href={href}
                  >
                    {input}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center">
            <Button className="w-full flex  justify-center" size="lg">
              Iniciar Sesión
            </Button>
          </div>
        </aside>
      )}
    </>
  );
}
