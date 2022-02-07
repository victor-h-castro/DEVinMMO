/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { SyntheticEvent, useEffect, useState } from 'react';
import {
  styled,
  Tab,
} from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useLocation, useNavigate } from 'react-router-dom';
import { gameIdMock } from 'util/gamesId';

const TabStyled = styled(Tab)(({ theme }) => ({

  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    minWidth: '0px !important',

  },
}));

export function TabHome() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = () => {
    if (pathname.includes('/news')) return '2';
    if (pathname.includes('/game')) return '3';
    return '1';
  };
  const [value, setValue] = useState('');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    const teste = path();
    setValue(teste);
  }, []);
  const randomNavigation = () => {
    const randomGenerator = Math.floor(Math.random() * gameIdMock.length);
    navigate(`/game/${gameIdMock[randomGenerator]}`);
  };
  return (
    <TabContext value={value}>
      <TabList indicatorColor="secondary" onChange={handleChange}>

        <TabStyled
          key="1"
          label="Home"
          value="1"
          onClick={() => navigate('/home')}
        />
        <TabStyled
          key="2"
          label="News"
          value="2"
          onClick={() => navigate('/news')}
        />

        <TabStyled
          key="3"
          label="Random"
          value="3"
          onClick={() => randomNavigation()}
        />
      </TabList>
    </TabContext>
  );
}
