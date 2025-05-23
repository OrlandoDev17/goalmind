import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import AuthFooter from '@/components/auth/AuthFooter';

export default function RegisterPage() {
  return (
    <>
      <AuthHeader type="register" />
      <AuthForm type="register" />
      <AuthFooter type="register" />
    </>
  );
}
