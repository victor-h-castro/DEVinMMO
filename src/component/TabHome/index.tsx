/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
// @mui
import { SyntheticEvent, useEffect, useState } from 'react';

import {
  Tab,
} from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useLocation, useNavigate } from 'react-router-dom';

const Tabs = [
  {
    value: '1',
    label: 'Home',
    disabled: false,
    navigation: '/home',
  },
  {
    value: '2',
    label: 'News',
    disabled: false,
    navigation: '/news',
  },
  {
    value: '3',
    label: 'Random',
    disabled: false,
    navigation: '/game/1',
  },
];

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
    const tabValue = path();
    setValue(tabValue);
  }, []);
  return (
    <TabContext value={value}>
      <TabList indicatorColor="secondary" onChange={handleChange}>
        {Tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            disabled={tab.disabled}
            onClick={() => navigate(tab.navigation)}
          />
        ))}
      </TabList>
    </TabContext>
  );
}
