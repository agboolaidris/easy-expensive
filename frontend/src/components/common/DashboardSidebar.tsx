import {
  BookOpenIcon,
  CalculatorIcon,
  Cog6ToothIcon,
  HomeIcon,
  ReceiptRefundIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Logo } from './Logo';

const sidebarLinks = [
  { href: '/dashboard', icon: HomeIcon, name: 'Dashboard' },
  {
    href: '/receipt',
    icon: ReceiptRefundIcon,
    name: 'Receipt',
  },
  {
    href: '/',
    icon: CalculatorIcon,
    name: 'Expensive',
  },
  {
    href: '/',
    icon: BookOpenIcon,
    name: 'Expensive Reports',
  },
  {
    href: '/dashboard/settings',
    icon: Cog6ToothIcon,
    name: 'Settings',
  },
];

export const DashboardSidebar = () => {
  const router = useRouter();

  return (
    <div className="flex grow flex-col overflow-y-auto bg-gray-50  pb-4">
      <div className="flex h-20 shrink-0 items-center  border-b-2 border-gray-200  px-6">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col">
          {sidebarLinks.map((item) => (
            <li key={item.name}>
              <Link
                className={classNames(
                  router.asPath === item.href
                    ? 'border-r-4 border-indigo-700 bg-indigo-100'
                    : 'hover:opacity-90',
                  'group flex gap-x-3  p-6 text-sm font-semibold leading-6 text-gray-600'
                )}
                href={item.href}
              >
                <item.icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-indigo-600"
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
