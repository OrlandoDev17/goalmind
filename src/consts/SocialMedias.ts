import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  XIcon,
} from '@/components/Icons';

interface SocialMediaProps {
  id: string;
  icon: React.ElementType;
  href: string;
}

export const SOCIAL_LINKS: SocialMediaProps[] = [
  {
    id: 'whatsapp',
    icon: WhatsappIcon,
    href: 'https://wa.me/+584242860846',
  },
  {
    id: 'instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com',
  },
  {
    id: 'x-twitter',
    icon: XIcon,
    href: 'https://x.com',
  },
  {
    id: 'github',
    icon: GithubIcon,
    href: 'https://github.com/OrlandoDev17',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    href: 'www.linkedin.com/in/orlando-lópez1707',
  },
] as const;
