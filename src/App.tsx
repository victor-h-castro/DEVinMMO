/* eslint-disable import/no-unresolved */
import { SettingsContext } from 'context/SettingContext';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from 'theme/GlobalStyles';
import { dark, light } from 'theme/my-theme';
import { ThemeProvider as ThemeProviderMUI, createTheme, useTheme } from '@mui/material/styles';
import Router from 'route';

function App() {
  const theme = useContext(SettingsContext);
  const defaultThemeMUI = useTheme();
  const themeMUI = createTheme(defaultThemeMUI);

  return (
    <ThemeProviderMUI theme={themeMUI}>
      <ThemeProvider theme={theme.themeMode === 'light' ? light : dark}>

        <MyGlobalStyle />
        <Router />

      </ThemeProvider>
    </ThemeProviderMUI>
  );
}

export default App;
