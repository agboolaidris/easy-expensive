import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  'w-full placeholder:font-normal text-indigo-600 disabled:opacity-50 !mt-0 !px-0 bg-transparent sm:text-sm focus:outline-none',
  {
    defaultVariants: {
      intent: 'normal',
    },
    variants: {
      intent: {
        normal: '!border-none !outline-none !ring-0  ',
      },
    },
  }
);

export type InputProps = Omit<VariantProps<typeof inputStyles>, 'error'> & {
  label?: string;
  loading?: boolean;
  error?: string;
} & Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'size'
  >;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, intent, className, ...rest }, ref) => {
    return (
      <label>
        {label && (
          <div className="mb-1 block text-sm font-medium leading-6 text-gray-600">
            {label}
          </div>
        )}
        <div className="relative">
          <input
            className={inputStyles({ className, intent })}
            ref={ref}
            {...rest}
          />
        </div>

        {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}
      </label>
    );
  }
);

Input.displayName = 'Input';
