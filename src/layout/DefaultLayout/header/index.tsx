/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { AppBar, Grid, Toolbar } from '@mui/material';
import { TabHome } from 'component/TabHome';
import ThemeSwitch from 'component/ThemeSwitch';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Searchbar from './SearchBar';

const AppBarStyled = styled(AppBar)`
background-color: #FFF
`;
const ToolBarStyled = styled(Toolbar)`
min-height: 96px;
`;

export default function Header() {
  const { pathname } = useLocation();

  return (
    <AppBarStyled>
      <ToolBarStyled>
        <Grid container justifyContent="flex-start" direction="row">
          <Grid item xs={2}>
            { !(pathname.includes('/game')) && <Searchbar />}
          </Grid>
          <Grid item container alignItems="center" justifyContent="center" xs={8}>

            <TabHome />

          </Grid>
          <Grid item container alignItems="center" justifyContent="flex-end" xs={2}>
            <ThemeSwitch />
          </Grid>

        </Grid>
      </ToolBarStyled>
    </AppBarStyled>
  );
}
