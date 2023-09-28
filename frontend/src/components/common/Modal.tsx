import { Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const styles = cva('pointer-events-none fixed inset-y-0 right-0 flex w-full ', {
  defaultVariants: {
    position: 'right',
  },
  variants: {
    position: {
      left: 'justify-start',
      right: 'justify-end',
    },
  },
});

type Props = VariantProps<typeof styles> & {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  className?: string;
};

export const Modal = ({ isOpen, onClose, children, className }: Props) => {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex h-full items-center justify-center overflow-hidden  text-center md:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={classNames(
                  'relative h-full max-h-full w-full transform overflow-auto bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-lg  sm:p-6 md:h-max md:rounded',
                  className
                )}
              >
                <div className="relative flex-1 px-4 py-4 sm:px-6">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
