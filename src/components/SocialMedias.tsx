import { SOCIAL_LINKS } from '@/consts/Consts';

export default function SocialMedias() {
  return (
    <ul className="flex place-items-center gap-2 md:gap-6 ">
      {SOCIAL_LINKS.map(({ id, icon: Icon, href }) => (
        <li key={id}>
          <a href={href}>
            <Icon className="size-12 p-2 rounded-lg hover:bg-green-400 hover:text-white hover:-rotate-8 transition duration-500" />
          </a>
        </li>
      ))}
    </ul>
  );
}
