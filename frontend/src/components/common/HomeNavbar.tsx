import React from 'react';
import { Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ModalTypes, useOpenModal } from 'src/store/modalStore';

import { Button } from './Button';

export const HomeNavbar = () => {
  const openModal = useOpenModal();
  return (
    <>
      <Popover as="header">
        {({ open }) => (
          <>
            <div className="relative flex justify-between py-5  lg:gap-8">
              <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                <div className="flex flex-shrink-0 items-center">
                  <Link className="font-bold text-gray-500" href="/">
                    Easyexpensive
                  </Link>
                </div>
              </div>

              <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden space-x-4 lg:flex lg:flex-1 lg:items-center lg:justify-end xl:col-span-4">
                <Button className="w-32" rounded>
                  Sign up
                </Button>
                <Button
                  className="w-24"
                  onClick={() => openModal({ modal: ModalTypes.LOGIN_MODAL })}
                  rounded
                  variants="neutral"
                >
                  Log in
                </Button>
              </div>
            </div>

            <Popover.Panel aria-label="Global" as="nav" className="lg:hidden">
              <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="mx-auto mt-3 max-w-3xl space-y-6 px-2 sm:px-4">
                  <Button block rounded>
                    Sign up
                  </Button>
                  <Button block rounded variants="neutral">
                    Log in
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
};
