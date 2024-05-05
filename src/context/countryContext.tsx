import { createContext, Dispatch, SetStateAction } from 'react';

const CountryContext = createContext({
  country: 'us',
  setCountry: (() => {}) as Dispatch<SetStateAction<string>>,
});

export default CountryContext;
