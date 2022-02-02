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
  // background-image:url(https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg)
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
