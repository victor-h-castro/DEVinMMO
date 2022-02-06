/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material';
import { CircularProgress } from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export type LoadingProps = {
  loading?: boolean,
  children: ReactElement;
}

export function Loading({ loading, children }: LoadingProps) {
  return !loading ? children : (
    <RootStyle>
      <motion.div
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <CircularProgress size={100} />
      </motion.div>

    </RootStyle>
  );
}
