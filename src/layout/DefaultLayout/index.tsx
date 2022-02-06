/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Header from './header';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: 64,
  paddingBottom: '40px',
  [theme.breakpoints.up('lg')]: {
    paddingTop: 128,
    paddingLeft: '18px',
    paddingRight: '18px',
  },
}));

export default function DefaultLayout() {
  return (
    <RootStyle>
      <MainStyle>
        <Outlet />
        <Header />
      </MainStyle>

    </RootStyle>
  );
}
