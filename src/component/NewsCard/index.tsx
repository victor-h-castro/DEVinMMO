/* eslint-disable no-unused-vars */
import {

  CardActionArea, CardActions, CardContent, CardMedia, Link, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import Card from '@mui/material/Card';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export type CardProps = {
  externalUrl: string,
  title: string,
  description: string,
  thumbnail: string,
};

const TypographyLongText = styled(Typography)`
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical
`;

export default function NewsCard({
  title, description, thumbnail, externalUrl,
}: CardProps) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{
      borderRadius: 5, background: 'white', boxShadow: '0 0 1px 0 #9e9e9e, 0 8px 16px -4px #9e9e9e', padding: 3,
    }}
    >

      <CardActionArea sx={{
        borderRadius: 5,
      }}
      >
        <motion.div whileHover={{
          scale: 1.1,
        }}
        >
          <CardMedia
            sx={{ borderRadius: 5, objectFit: 'fill' }}
            component="img"
            height={matches ? '160' : '260'}
            image={thumbnail}
            alt="green iguana"
          />
        </motion.div>
        <CardContent>
          <Typography variant={matches ? 'h6' : 'h4'}>
            {title}
          </Typography>
          <TypographyLongText sx={{ filter: 'contrast(20%)' }} variant={matches ? 'subtitle2' : 'subtitle1'}>
            {description}
          </TypographyLongText>
        </CardContent>
        <CardActions sx={{ padding: 2 }}>
          <Link target="_blank" href={externalUrl} rel="noreferrer">
            View Link
          </Link>

        </CardActions>
      </CardActionArea>

    </Card>
  );
}
/*
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ImageCard() {
  return (
    <Card sx={{
      maxWidth: 640, backdropFilter: 'blur(200px)',
    }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ padding: 2, borderRadius: 5 }}
          component="img"
          height="620"
          image="https://www.mmobomb.com/g/159/thumbnail.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
 */
