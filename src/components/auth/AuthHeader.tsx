import Paragraph from '../ui/Paragraph';
import { BrainIcon } from '../Icons';

interface AuthHeaderType {
  type: 'login' | 'register';
}

export default function AuthHeader({ type }: AuthHeaderType) {
  return (
    <header className="flex flex-col items-center justify-center gap-4">
      <BrainIcon className="text-blue-500 bg-blue-100 p-2 size-14 rounded-full" />
      <h2 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-4xl font-semibold">
        {type === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
      </h2>
      <Paragraph>
        {type === 'login'
          ? 'Ingresa tus credenciales para acceder a tu cuenta'
          : 'Ingresa tus datos para registrarte en GoalMind'}
      </Paragraph>
    </header>
  );
}
