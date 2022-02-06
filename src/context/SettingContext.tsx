/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import { ReactNode, createContext, useState } from 'react';
import { ContextProps, ThemeMode } from 'type/theme';

const initialState: ContextProps = {
  themeMode: 'light',
  state: '',
  setState: (statee: any) => { },
  setThemeMode: (statee: any) => { },
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  const [state, setState] = useState('');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  return (
    <SettingsContext.Provider
      value={{
        themeMode, setThemeMode, state, setState,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
