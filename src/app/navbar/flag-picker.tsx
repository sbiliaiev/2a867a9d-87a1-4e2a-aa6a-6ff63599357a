import { Fragment, useContext, useState, useEffect, memo } from 'react';
import Image from 'next/image';

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { CountryContext } from '@/context';

import Tabs from './tabs';

const FlagPicker = memo(function FlagPicker() {
  const [countriesData, setCountriesData] = useState({});
  const isDataFetched = !!Object.keys(countriesData);
  const { country } = useContext(CountryContext);

  const mapData = (data: any[]) => {
    const mappedData: any = {};
    data.forEach((country) => {
      let { region, id, name, 'alpha-2': key } = country;
      if (!region) {
        region = 'Global';
      }
      if (!mappedData[region]) {
        mappedData[region] = [];
      }
      mappedData[region] = [
        ...mappedData[region],
        {
          id,
          name,
          key: key.toLowerCase(),
        },
      ];
    });

    return mappedData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://retoolapi.dev/TkEl3I/countriesdata',
      );
      const result = await response.json();
      setCountriesData(mapData(result));
    };

    fetchData();
  }, []);

  return (
    <Popover className="relative">
      <Popover.Button
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        disabled={!isDataFetched}
      >
        <Image
          src={`/flags/${country}.svg`}
          alt="Vercel Logo"
          className="dark:invert"
          width={30}
          height={24}
          priority
        />
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 top-full z-20 mt-3 max-w-4xl w-screen overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <Tabs data={countriesData} />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
});

export default FlagPicker;
