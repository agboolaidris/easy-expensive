import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from 'src/pages/_app';
import { axiosInstance } from 'src/util/axiosInstance';

export const authQueryKey = ['/user/me'];
type User = {
  email: string;
  fullName: string;
};

export type AuthState = {
  accessToken?: string;
  user: User | null;
  isAuthenticated: boolean;
};
type Login = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const { data: authState, isLoading: isLoadingUser } = useQuery<AuthState>({
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<User>('/users/me');
        return {
          accessToken: '',
          isAuthenticated: true,
          user: data,
        };
      } catch (error) {
        return { accessToken: '', isAuthenticated: false, user: null };
      }
    },
    queryKey: authQueryKey,
  });

  const { mutateAsync: login } = useMutation({
    mutationFn: async (value: Login) => {
      const { data } = await axiosInstance.post<
        Omit<AuthState, 'isAuthenticated'>
      >('/auth/login', value);
      localStorage.setItem('accessToken', data?.accessToken as string);
      queryClient.setQueryData(authQueryKey, {
        isAuthenticated: true,
        ...data,
      });
    },
  });

  const logout = () => {
    localStorage.removeItem('accessToken');
    queryClient.setQueryData(authQueryKey, {
      accessToken: '',
      isAuthenticated: false,
      user: null,
    });
  };

  return {
    authState,
    isLoadingUser,
    login,
    logout,
  };
};
