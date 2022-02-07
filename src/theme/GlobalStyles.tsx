/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const MyGlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box

};
h1, p, h2, h2, h3, h4, h5, h6, span { 
  font-family: 'Montserrat' !important;
}

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
