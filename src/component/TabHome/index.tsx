/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
// @mui
import { SyntheticEvent, useState } from 'react';

import {
  Tab,
} from '@mui/material';
import { TabContext, TabList } from '@mui/lab';

const SIMPLE_TAB = [
  {
    value: '1',
    label: 'Home',
    disabled: false,
  },
  {
    value: '2',
    label: 'News',
    disabled: false,
  },
  {
    value: '3',
    label: 'Surprise Me',
    disabled: false,
  },
];

export function TabHome() {
  const [value, setValue] = useState('1');
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <TabList indicatorColor="secondary" onChange={handleChange}>
        {SIMPLE_TAB.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            disabled={tab.disabled}
          />
        ))}
      </TabList>
    </TabContext>
  );
}
