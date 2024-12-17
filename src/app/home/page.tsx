'use client'

import getSessionToken from '@/hooks/getSessionToken';
import { useRouter } from 'next/navigation';

import { useUser } from '@/contexts/context-user';
import { useEffect, useState } from 'react';

export default function Home() {
  const { push } = useRouter();

  const { user } = useUser();

  useEffect( () => {
    const fetchSession = async () => {
      const session = await getSessionToken();
      if (!session) {
        push('/login');
      }
    };
    fetchSession();
  }, []);

  return (
    <div>
      <h1>Home Page, {user?.firstName} de {user?.lastName}</h1>
    </div>
  );
}