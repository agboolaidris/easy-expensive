import { Fragment, ReactNode, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DashboardNavbar } from '@ui/common/DashboardNavbar';
import { DashboardSidebar } from '@ui/common/DashboardSidebar';
import { useRouter } from 'next/router';
import { useAuth } from 'src/hooks/useAuth';

type DashboardLayoutProps = {
  children?: ReactNode;
  filled?: boolean;
};

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { authState, isLoadingUser } = useAuth();

  useEffect(() => {
    if (!isLoadingUser) {
      if (!authState?.isAuthenticated) {
        router.push('/');
      }
    }
  }, [isLoadingUser, authState, router]);

  if (isLoadingUser || !authState?.isAuthenticated) return null;

  return (
    <>
      <div>
        <Transition.Root as={Fragment} show={sidebarOpen}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                        type="button"
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          aria-hidden="true"
                          className="h-6 w-6 text-white"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <DashboardSidebar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden shadow lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <DashboardSidebar />
        </div>

        <div className="lg:pl-72">
          <div className="lg:hidden">
            <DashboardNavbar setSidebarOpen={setSidebarOpen} />
          </div>

          <main className="bg-indigo-50 pb-10 pt-5 lg:pt-10">
            <div className="min-h-screen px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};
