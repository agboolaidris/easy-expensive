import { Bars3Icon } from '@heroicons/react/24/outline';

import { Logo } from './Logo';

type DashboardNavbarProp = {
  setSidebarOpen: (open: boolean) => void;
};

export const DashboardNavbar = ({ setSidebarOpen }: DashboardNavbarProp) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
        type="button"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      <div className="ml-auto">
        <Logo />
      </div>
    </div>
  );
};
