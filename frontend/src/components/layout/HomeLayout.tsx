import React, { ReactNode, useEffect } from 'react';
import { HomeNavbar } from '@ui/common/HomeNavbar';
import { useRouter } from 'next/router';
import { useAuth } from 'src/hooks/useAuth';

type Props = {
  children: ReactNode;
};

export const HomeLayout = ({ children }: Props) => {
  const { push } = useRouter();
  const { authState, isLoadingUser } = useAuth();

  useEffect(() => {
    // Wait until isLoadingUser becomes false before navigating
    if (!isLoadingUser) {
      if (authState?.isAuthenticated) {
        push('/dashboard');
      }
    }
  }, [isLoadingUser, authState, push]);

  if (isLoadingUser || authState?.isAuthenticated) return null;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HomeNavbar />
      {children}
    </div>
  );
};
