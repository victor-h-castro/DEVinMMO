/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import { ReactNode, createContext, useState } from 'react';
import { ContextProps } from 'type/theme';

const initialState: ContextProps = {
  themeMode: 'light',
  state: '',
  setState: (statee: any) => { },
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [state, setState] = useState('');
  return (
    <SettingsContext.Provider
      value={{ ...initialState, state, setState }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
