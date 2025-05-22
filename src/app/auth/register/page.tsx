import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import AuthButton from '@/components/auth/AuthButton';
import AuthFooter from '@/components/auth/AuthFooter';

export default function RegisterPage() {
  return (
    <>
      <AuthHeader type="register" />
      <AuthForm type="register" />
      <AuthButton type="register" />
      <AuthFooter type="register" />
    </>
  );
}
