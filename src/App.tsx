/* eslint-disable import/no-unresolved */
import { Testing } from 'component/Testing';
import { SettingsContext } from 'context/SettingContext';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyle } from 'theme/GlobalStyles';
import { dark, light } from 'theme/my-theme';

function App() {
  const theme = useContext(SettingsContext);
  console.log(theme.themeMode);
  return (

    <ThemeProvider theme={theme.themeMode === 'light' ? light : dark}>

      <MyGlobalStyle />
      <Testing />
      <input />
    </ThemeProvider>
  );
}

export default App;
