import SocialMedias from '@/components/SocialMedias';
import { FOOTER_LINKS } from '@/consts/Consts';
import Paragraph from '../ui/Paragraph';

export default function Footer() {
  return (
    <footer className="mt-36 mb-8 mx-10 md:mx-24 xl:mx-36">
      <section className="grid grid-cols-1 xl:grid-cols-3 xl:place-items-center xl:items-start gap-4">
        <article className="flex items-start flex-col gap-6">
          <picture className="flex items-center gap-2">
            <img
              className="size-10"
              src="./images/logo-GoalMind.svg"
              alt="Logo de GoalMind"
            />
            <h4 className="text-3xl font-bold text-blue-500">
              Goal<span className="text-black">Mind</span>
            </h4>
          </picture>
          <Paragraph className="font-light text-pretty text-start">
            Plataforma inteligente para establecer, visualizar y alcanzar tus
            objetivos con ayuda de IA
          </Paragraph>
          <SocialMedias />
        </article>
        <article className="flex flex-col justify-start gap-4">
          <h5 className="font-semibold text-xl">Plataforma</h5>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.map(({ title, href }, index) => (
              <li key={index}>
                <a
                  className="text-lg font-inter font-light tracking-wider text-gray-600 hover:text-black"
                  href={href}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </article>
        <article className="flex flex-col gap-6">
          <h5 className="font-semibold text-xl">Suscribete</h5>
          <p className="text-gray-600 max-w-80 text-balance">
            Recibe las últimas novedades y consejos para alcanzar tus metas
          </p>
          <form className="flex gap-2">
            <input
              className="border-1 border-gray-200 p-2 rounded-lg max-w-50"
              type="email"
              placeholder="tucorreo@gmail.com"
            />
            <button className="bg-blue-500 text-white px-2 rounded-lg font-semibold">
              Enviar
            </button>
          </form>
        </article>
      </section>
      <hr className="mt-12 text-zinc-200" />
      <aside className="flex justify-center items-center mt-8">
        <h5 className="text-sm text-gray-600 font-light font-inter">
          © 2025 GoalMins. Todos los derechos reservados.
        </h5>
      </aside>
    </footer>
  );
}
