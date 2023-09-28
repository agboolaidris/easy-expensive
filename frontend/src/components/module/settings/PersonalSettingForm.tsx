import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button } from '@ui/common/Button';
import { Input } from '@ui/common/Input';
import { useAuth } from 'src/hooks/useAuth';
import { useUser } from 'src/hooks/useUser';

type PersonalSetting = {
  fullName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
};

export const PersonalSettingForm = () => {
  const { authState } = useAuth();
  const { updatePersonalInformation } = useUser();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<PersonalSetting>({
    defaultValues: { ...authState?.user },
  });

  const onSubmit: SubmitHandler<PersonalSetting> = async (data) => {
    try {
      await updatePersonalInformation(data);
      toast.success('Personal information updated!!!');
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className=" rounded-lg bg-gray-50 p-4 sm:p-10">
      <h3 className="text-xl font-semibold text-gray-800 sm:text-2xl">
        Personal Settings
      </h3>
      <form
        className="mt-10 grid gap-10 md:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="border p-2">
          <Input label="Personal Name" {...register('fullName')} />
        </div>
        <div className="border bg-gray-100 p-2">
          <Input label="Email" {...register('email')} disabled />
        </div>
        <div className="border p-2">
          <Input
            label="Current Password"
            {...register('currentPassword')}
            type="password"
          />
        </div>
        <div className="border p-2">
          <Input
            label="New Password"
            {...register('newPassword')}
            type="password"
          />
        </div>
        <div className="col-span-full">
          <div className="flex  flex-col-reverse items-center justify-between gap-6 md:flex-row">
            <Button
              className="block w-full md:max-w-[200px]"
              type="reset"
              variants="error"
            >
              Delete Personal
            </Button>
            <div className="flex w-full gap-4 md:w-max">
              <Button
                className="block w-full border border-gray-400 hover:border-gray-100 md:w-[200px]"
                type="button"
                variants="neutral"
              >
                Cancel
              </Button>
              <Button
                className="block w-full md:w-[200px]"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                type="submit"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
