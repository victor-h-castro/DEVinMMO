/* eslint-disable no-unused-vars */
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function useStorage<Generic>(key: string, defaultSchema: Generic) {
  const [value, setValue] = useState(() => {
    const storagedData = localStorage.getItem(key);
    return storagedData === null ? defaultSchema : JSON.parse(storagedData);
  });

  const setValueToStorage = (newValue: Generic) => {
    setValue((currentValue: any) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return [value, setValueToStorage];
}
