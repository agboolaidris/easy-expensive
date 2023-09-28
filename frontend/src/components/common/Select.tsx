import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import ReactSelectAsync from 'react-select/async';
import ReactSelectCreatable from 'react-select/creatable';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  'w-full placeholder:font-normal text-indigo-600 !mt-0 !px-0 bg-transparent sm:text-sm focus:outline-none',
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

type SelectProps<Option, IsMulti extends boolean> = ReactSelectProps<
  Option,
  IsMulti
> & {
  isCreatable?: boolean;
  label?: string;
  helpText?: string;
  error?: string;
  isAsync?: boolean;
  onCreateOption?: (inputValue: string) => void;
  optional?: boolean;
};

const getSelectComponent = (isAsync?: boolean, isCreatable?: boolean) => {
  if (isAsync) {
    return ReactSelectAsync;
  } else if (isCreatable) {
    return ReactSelectCreatable;
  }
  return ReactSelect;
};

export const Select = <Option, IsMulti extends boolean>({
  label,
  error,
  isCreatable,
  isDisabled,
  placeholder,
  helpText,
  isAsync,
  optional,
  ...props
}: SelectProps<Option, IsMulti>) => {
  const SelectComponent = getSelectComponent(isAsync, isCreatable);
  return (
    <label>
      {label && (
        <div className="mb-1 block text-sm font-medium leading-6 text-gray-600 ">
          {label}
        </div>
      )}
      <div className="relative">
        <SelectComponent
          {...props}
          classNames={{
            control: () => '!border-none !shadow-none !bg-transparent !px-0',
            dropdownIndicator: () => '!hidden',
            indicatorSeparator: () => '!hidden',
            input: () => '!shadow-none',
            singleValue: () => '!bg-pink-600',
          }}
          id={props.name}
          isDisabled={isDisabled}
          placeholder={placeholder || ''}
          styles={{
            input: (base) => ({
              ...base,
              'input:focus': {
                boxShadow: 'none',
              },
            }),
          }}
        />
      </div>

      {error && <p className="mt-2 text-sm text-rose-500">{error}</p>}
    </label>
  );
};
