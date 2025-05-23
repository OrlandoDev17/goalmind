import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import AuthFooter from '@/components/auth/AuthFooter';

export default function LoginPage() {
  return (
    <>
      <AuthHeader type="login" />
      <AuthForm type="login" />
      <AuthFooter type="login" />
    </>
  );
}
