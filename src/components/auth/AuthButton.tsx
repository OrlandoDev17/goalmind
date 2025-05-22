import { LoginIcon } from '../Icons';

interface AuthButtonProps {
  type: 'login' | 'register';
}

export default function AuthButton({ type }: AuthButtonProps) {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-green-400 p-2 rounded-lg text-white font-semibold text-lg flex justify-center gap-2">
      <LoginIcon />
      {type === 'login' ? 'Iniciar Sesión' : 'Regístrarse'}
    </button>
  );
}
