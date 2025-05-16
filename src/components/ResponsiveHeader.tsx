'use client';

import { useId, useState } from 'react';
import { BarsIcon } from './Icons';

export default function ResponsiveHeader() {
  const [isChecked, setIsChecked] = useState(false);

  const menuCheckboxId = useId();

  const handleShowMenu = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
        className="block xl:hidden"
        onClick={handleShowMenu}
        htmlFor={menuCheckboxId}
      >
        <BarsIcon className=" size-10 cursor-pointer  hover:text-blue-500 hover:scale-110 transition" />
      </label>

      <input type="checkbox" id={menuCheckboxId} hidden />

      {isChecked && (
        <aside className="fixed top-30 right-0 bg-blue-200 w-full h-screen z-100">
          <h1>holi</h1>
        </aside>
      )}
    </>
  );
}
