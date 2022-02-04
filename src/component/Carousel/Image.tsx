/* eslint-disable react/jsx-props-no-spreading */
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';
import { Box, BoxProps } from '@mui/material';

type CarouselProps = BoxProps & LazyLoadImageProps;

interface ComponentProps extends CarouselProps {
}

export default function Image({
  ...other
}: ComponentProps) {
  return (
    <Box
      component="span"
      sx={{
        display: 'block',
        overflow: 'hidden',
        lineHeight: 0,
        '& .imageWrapper': { width: 1, height: 1, backgroundSize: 'cover' },
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="imageWrapper"
        sx={{ width: 300, height: 300, objectFit: 'contain' }}
        {...other}
      />
    </Box>
  );
}
