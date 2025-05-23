'use client';

import { useEffect, useState } from 'react';
import Paragraph from '@/components/ui/Paragraph';
import GoalModal from '@/components/GoalModal';
import { supabase } from '@/lib/supabaseClient';

export default function Goals() {
  const [welcomeMsg, setWelcomeMsg] = useState<string | null>(null);

  useEffect(() => {
    const showWelcomeMessage = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const fullName = user?.user_metadata?.full_name || 'usuario';

      const getWelcomeType = (): 'new' | 'returning' => {
        if (typeof window === 'undefined') return 'returning';

        if (localStorage.getItem('justSignedUp')) {
          localStorage.removeItem('justSignedUp');
          return 'new';
        }

        return 'returning';
      };

      const type = getWelcomeType();
      setWelcomeMsg(
        `Bienvenido${type === 'returning' ? ' de nuevo' : ''}, ${fullName}`
      );

      // setTimeout(() => setWelcomeMsg(''), 5000);
    };

    showWelcomeMessage();
  }, []);

  return (
    <>
      <div>
        {welcomeMsg && (
          <div className="absolute left-[40%] top-10 border-2 border-green-500 p-4 text-lg text-green-500 rounded-lg">
            {welcomeMsg}
          </div>
        )}
      </div>
      <section className="flex flex-col justify-center items-center px-36 pt-12">
        <header className="flex justify-between w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">Objetivos</h2>
            <Paragraph className="md:text-xl">
              Gestiona y visualiza todos tus objetivos en un solo lugar.
            </Paragraph>
          </div>
          <div>
            <GoalModal />
          </div>
        </header>
      </section>
    </>
  );
}
