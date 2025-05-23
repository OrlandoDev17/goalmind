import { LoginIcon } from '../Icons';

interface AuthButtonProps {
  type: 'login' | 'register';
  loading?: boolean;
}

export default function AuthButton({ type, loading }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="bg-gradient-to-r from-blue-500 to-green-400 p-2 rounded-lg text-white font-semibold text-lg flex justify-center gap-2 cursor-pointer hover:opacity-50 transition disabled:opacity-30"
    >
      <LoginIcon />
      {loading
        ? 'Cargando...'
        : type === 'login'
        ? 'Iniciar Sesión'
        : 'Regístrarse'}
    </button>
  );
}
