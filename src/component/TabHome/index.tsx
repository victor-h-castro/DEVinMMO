/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */

import { useEffect, useState } from 'react';

import {
  Tab,
} from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { useLocation, useNavigate } from 'react-router-dom';

const TABS = [
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
    navigation: '/home/news',
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
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    const routeValue = path();
    setValue(routeValue);
  }, []);
  return (
    <TabContext value={value}>
      <TabList indicatorColor="secondary" onChange={() => handleChange}>
        {TABS.map((tab) => (
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
