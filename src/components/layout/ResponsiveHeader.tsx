'use client';

import { useId, useState } from 'react';
import { BarsIcon } from '@/components/Icons';
import { NAV_INPUTS } from '@/consts/HeaderNav';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ResponsiveHeader() {
  const [isChecked, setIsChecked] = useState(false);

  const menuCheckboxId = useId();

  const handleShowMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
        className="menu-button flex xl:hidden"
        onClick={handleShowMenu}
        htmlFor={menuCheckboxId}
      >
        <BarsIcon className=" size-12 cursor-pointer p-2 rounded-lg hover:bg-green-400 hover:text-white hover:scale-110 transition" />
      </label>

      <input type="checkbox" id={menuCheckboxId} hidden />

      {isChecked === true && (
        <aside className="menu fixed top-19 right-0 bg-white w-full h-screen z-100 flex flex-col place-items-start gap-4 p-8">
          <nav>
            <ul className="flex flex-col gap-4">
              {NAV_INPUTS.map(({ input, href }) => (
                <li key={input}>
                  <Link
                    className="flex flex-col w-150 p-3 rounded-lg text-lg font-inter font-semibold hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition"
                    href={href}
                  >
                    {input}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center">
            <Button className="w-150 flex justify-center" size="lg">
              Iniciar Sesión
            </Button>
          </div>
        </aside>
      )}
    </>
  );
}
