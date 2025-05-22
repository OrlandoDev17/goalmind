import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GoalMind',
  description:
    'GoalMind es una plataforma moderna que ayuda a los usuarios a establecer, visualizar y alcanzar objetivos con tecnología avanzada.',
  icons: {
    icon: './images/logo-GoalMind.svg',
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="h-screen bg-blue-50 flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-blue-500 to-green-400 h-2 w-full rounded-tl-lg rounded-tr-lg"></span>
          <article className="rounded-bl-lg rounded-br-lg p-8 border-2 border-zinc-200 bg-white flex flex-col gap-4">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
