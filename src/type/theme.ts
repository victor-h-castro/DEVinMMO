/* eslint-disable no-unused-vars */
export type ThemeMode = 'light' | 'dark';

export type ContextProps = {
  themeMode: ThemeMode,
  state: string,
  setState: (state: string) => void,
  setThemeMode: (state: ThemeMode) => void,

};
