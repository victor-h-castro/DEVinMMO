/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
// https://mui.com/pt/api/icon-button/ e https://mui.com/components/buttons/
import { forwardRef, ReactNode } from 'react';
import { Box, IconButton, IconButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

const ButtonAnimated = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, ...other }, ref) => (

    <AnimatedWrappper>
      <IconButton size="medium" ref={ref} {...other}>
        {children}
      </IconButton>
    </AnimatedWrappper>
  ),
);

export default ButtonAnimated;

type AnimationWrapperProp = {
  children: ReactNode;
};

function AnimatedWrappper({ children }: AnimationWrapperProp) {
  return (
    <Box
      component={motion.div}
      animate={{ scale: [0, 2, 1] }}
      transition={{ ease: 'easeIn', duration: 1 }}
      sx={{
        display: 'inline-flex',
      }}
    >
      {children}
    </Box>
  );
}
