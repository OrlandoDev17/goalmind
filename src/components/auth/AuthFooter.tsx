import Link from 'next/link';
import Paragraph from '../ui/Paragraph';
import SocialAuth from './SocialAuth';

interface AuthFooterType {
  type: 'login' | 'register';
}

export default function AuthFooter({ type }: AuthFooterType) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Paragraph>O continúa con</Paragraph>
      <SocialAuth />
      <p className="font-medium">
        {type === 'login' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
        <Link
          className="text-blue-600 ml-3 hover:text-blue-700"
          href={`/auth/${type === 'login' ? 'register' : 'login'}`}
        >
          {type === 'login' ? 'Regístrate' : 'Inicia Sesión'}
        </Link>
      </p>
    </div>
  );
}
