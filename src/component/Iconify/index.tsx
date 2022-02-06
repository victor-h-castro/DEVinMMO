/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { Box, BoxProps } from '@mui/material';
import { Icon, IconifyIcon } from '@iconify/react';

interface IconProps extends BoxProps {
  icon: IconifyIcon | string;
}

export default function Iconify({ icon, ...other }: IconProps) {
  return <Box component={Icon} icon={icon} {...other} />;
}
