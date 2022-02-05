/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import { Container, Grid } from '@mui/material';
import Carousel from 'component/Carousel';
import ImageCard from 'component/ImageCard';
import { SettingsContext } from 'context/SettingContext';
import { useContext, useEffect, useState } from 'react';
import { useMmoService } from 'service/useMmoService';
import { GameProps } from 'type/game';
import { GameListProps } from 'type/gameList';
import { NewsListProps } from 'type/newsList';
import { useParams } from 'react-router-dom';

export const Game = () => {
  const { fetchGameListData, fetchNewsListData, fetchGameData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);

  const [game, setGame] = useState<string[]>([]);
  const { state } = useContext(SettingsContext);
  const { gameId } = useParams();

  const fetchGame = async (id:string) => {
    setLoading(true);
    const gameData :GameProps = await fetchGameData(id);
    setGame(() => gameData.screenshots.map((element) => element.image));
    setLoading(() => true);
  };
  useEffect(() => {
    (async () => {
      await fetchGame(`${gameId}`);
    })();
  }, []);
  console.log(game);
  return (
    <Grid direction="row" spacing={5} container px={2} sx={{ marginTop: 1 }}>
      <Grid item xs={12}>
        <Carousel images={game} />
      </Grid>
    </Grid>
  );
};
