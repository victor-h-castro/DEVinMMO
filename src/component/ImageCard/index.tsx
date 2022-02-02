import {
  Button,
  CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import Card from '@mui/material/Card';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export type CardProps = {
  id: number,
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

export default function ImageCard({
  id, title, description, thumbnail,
}: CardProps) {
  const navigate = useNavigate();

  const handleClick = (gameId: number): void => {
    navigate(`/home/${gameId}`);
  };

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
            height="240"
            image={thumbnail}
            alt="green iguana"
          />
        </motion.div>
        <CardContent>
          <Typography variant="h5">
            {title}
          </Typography>
          <TypographyLongText>
            {description}
          </TypographyLongText>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => handleClick(id)}>Learn More</Button>
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
