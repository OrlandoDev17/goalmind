'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const userId = data?.user?.id;
    setLoading(false);
    setError(error?.message ?? null);
    if (!error) router.push('/goals');
  };

  const register = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    setLoading(false);
    setError(error?.message ?? null);
    if (!error) {
      localStorage.setItem('justSignedUp', 'true');
      router.push('/goals');
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return { login, register, logout, loading, error };
}
