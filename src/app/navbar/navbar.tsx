import { Popover } from '@headlessui/react';

import FlagPicker from './flag-picker';

export default function NavBar() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            This is
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Dummy
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Navbar
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <FlagPicker />
        </div>
      </nav>
    </header>
  );
}
