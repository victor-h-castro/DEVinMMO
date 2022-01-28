/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
};
html {
  width: 100%;
  height: 100%;
  webkit-overflow-scrolling: touch
};
body {
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};

};

#root {
  width: 100%;
  height: 100%
};
input {
  &[type=number]: {
    MozAppearance: textfield;
    &::-webkit-outer-spin-button: {
      margin: 0;
      webkit-appearance: none
    };
    &::-webkit-inner-spin-button: {
      margin: 0;
      webkit-appearance: none
    }
  }
};


img { display: block; maxWidth: 100% };

`;
