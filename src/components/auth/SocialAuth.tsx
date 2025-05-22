import { GithubIcon, GoogleBrand } from '../Icons';

interface SocialButtonProps {
  id: number;
  icon: React.ElementType;
  text: string;
}

const SOCIAL_AUTH: SocialButtonProps[] = [
  {
    id: 1,
    icon: GoogleBrand,
    text: 'Google',
  },
  {
    id: 2,
    icon: GithubIcon,
    text: 'GitHub',
  },
];

export default function SocialAuth() {
  return (
    <div className="flex items-center justify-center gap-4">
      {SOCIAL_AUTH.map(({ id, icon: Icon, text }) => (
        <button
          key={id}
          className="flex items-center justify-center gap-2 p-2 rounded-lg border-1 border-blue-300 font-medium hover:bg-blue-200 transition cursor-pointer"
        >
          <Icon className="size-6" />
          {text}
        </button>
      ))}
    </div>
  );
}
