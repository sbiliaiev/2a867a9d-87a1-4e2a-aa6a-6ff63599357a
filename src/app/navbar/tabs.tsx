import { useContext, memo } from 'react';

import Image from 'next/image';

import { Popover, Tab } from '@headlessui/react';

import { CountryContext } from '@/context';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface TabsProps {
  data: {
    [key: string]: { id: number; key: string; name: string }[];
  };
}

const Tabs = memo(function Tabs({ data }: TabsProps) {
  const { setCountry } = useContext(CountryContext);

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1">
          {Object.keys(data).map((region) => (
            <Tab
              key={region}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 focus:outline-none font-black uppercase hover:bg-zinc-200',
                  selected
                    ? 'bg-white text-black border-b-2 border-zinc-400'
                    : 'text-gray-500 border-b-2 border-zinc-200',
                )
              }
            >
              {region}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(data).map((countries, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              )}
            >
              <div className="grid grid-cols-4 gap-4">
                {countries.map((country) => (
                  <Popover.Button
                    key={country.id}
                    className="relative rounded-md p-3 hover:bg-gray-100 flex items-center"
                    onClick={() => setCountry(country.key)}
                  >
                    <Image
                      src={`/flags/${country.key}.svg`}
                      alt="Vercel Logo"
                      className="dark:invert mr-4"
                      width={28}
                      height={14}
                      priority
                    />
                    <h3 className="text-sm font-medium leading-5 truncate">
                      {country.name}
                    </h3>
                  </Popover.Button>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
});

export default Tabs;
