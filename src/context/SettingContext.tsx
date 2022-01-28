/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import { ReactNode, createContext } from 'react';
import { ContextProps } from 'type/theme';

const initialState: ContextProps = {
  themeMode: 'light',
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

function SettingsProvider({ children }: SettingsProviderProps) {
  return (
    <SettingsContext.Provider
      value={{
        ...initialState,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
