import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { LoadingSpinner } from './LoadingSpinner';

const buttonStyle = cva(
  'rounded text-sm flex justify-center gap-1 items-center disabled:opacity-25',
  {
    defaultVariants: {
      block: false,
      rounded: false,
      size: 'sm',
      variants: 'primary',
    },
    variants: {
      block: {
        true: 'w-full block',
      },
      rounded: { true: 'rounded-full' },
      size: {
        md: 'py-2 px-4',
        sm: 'p-2',
      },
      variants: {
        error: 'bg-rose-600 text-white hover:bg-rose-500',
        neutral: 'text-gray-600 hover:bg-gray-100',
        primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
        secondary: 'border border-gray-100 hover:bg-gray-100',
      },
    },
  }
);

type Props = VariantProps<typeof buttonStyle> &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    isLoading?: boolean;
  };

export const Button = ({
  variants,
  size,
  className,
  children,
  rounded,
  block,
  isLoading,
  ...rest
}: Props) => {
  const style = buttonStyle({ block, className, rounded, size, variants });
  return (
    <button className={style} {...rest}>
      {isLoading && <LoadingSpinner />}
      {children}
    </button>
  );
};
