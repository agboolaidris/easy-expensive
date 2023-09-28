import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from 'src/util/axiosInstance';

type PersonalInformation = {
  currentPassword?: string;
  newPassword?: string;
  fullName?: string;
};

export const useUser = () => {
  const { mutateAsync: updatePersonalInformation } = useMutation({
    mutationFn: async (value: PersonalInformation) =>
      axiosInstance.patch<any>('/users/personal-information', value),
  });

  return {
    updatePersonalInformation,
  };
};
