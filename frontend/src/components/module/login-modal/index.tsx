import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button } from '@ui/common/Button';
import { Input } from '@ui/common/Input';
import { Modal } from '@ui/common/Modal';
import Image from 'next/image';
import { useAuth } from 'src/hooks/useAuth';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
type Login = {
  email: string;
  password: string;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Login>({});
  const { login } = useAuth();

  const onSubmit: SubmitHandler<Login> = async (value) => {
    try {
      await login(value);
      onClose();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3 className="font-bold text-gray-700">easyexpensive</h3>
          <h1 className="mt-3 text-3xl font-bold text-gray-800">Login</h1>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, velit? Debitis.
          </p>
        </div>
        <div>
          <div className="divide-y divide-gray-400 border border-gray-400">
            <div>
              <div className="px-4 py-2 focus-within:border-r-4 focus-within:!border-indigo-500 ">
                <Input
                  label="Email Address"
                  {...register('email')}
                  autoComplete="off"
                />
              </div>
            </div>
            <div>
              <div className="px-4 py-2 focus-within:border-r-4 focus-within:!border-indigo-500 ">
                <Input
                  autoComplete="one-time-code"
                  label="Password"
                  type="password"
                  {...register('password')}
                />
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm font-medium leading-6 text-gray-500">
            <label className="flex items-center gap-3 hover:text-indigo-500">
              <input
                aria-describedby="comments-description"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-0 focus:ring-indigo-600"
                id="comments"
                name="comments"
                type="checkbox"
              />
              Remember me
            </label>
            <button className="hover:text-indigo-500">Forget password?</button>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            className="flex-1 border border-indigo-700  bg-transparent text-indigo-700"
            type="button"
          >
            Sign up
          </Button>
          <Button
            className="flex-1"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            type="submit"
          >
            Log in
          </Button>
        </div>
        <Button
          block
          className="flex items-center justify-center gap-3"
          type="button"
          variants="error"
        >
          <Image alt="google" height={20} src="/icons/google.png" width={20} />{' '}
          Login with Google
        </Button>
      </form>
    </Modal>
  );
};
