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
import { DescriptionCard } from 'component/DescriptionCard';
import { FormGame } from 'component/FormGame';
import { FormProps } from 'type/form';

export const Game = () => {
  const { fetchGameListData, fetchNewsListData, fetchGameData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<FormProps[]>([]);

  const [game, setGame] = useState<GameProps>();
  const [screenshots, setScreenshots] = useState<string[]>([]);

  const { state } = useContext(SettingsContext);
  const { gameId } = useParams();

  const addComments = async (comment:FormProps) => {
    setComments((prev) => [...prev, comment]);
  };

  const fetchGame = async (id:string) => {
    setLoading(true);
    const gameData :GameProps = await fetchGameData(id);
    setGame(() => gameData);

    setScreenshots(() => gameData.screenshots.map((element) => element.image));
    setLoading(() => true);
  };
  useEffect(() => {
    (async () => {
      await fetchGame(`${gameId}`);
    })();
  }, []);
  console.log(comments);
  return (
    <Container maxWidth="xl">

      <Grid direction="row" spacing={5} container px={2} sx={{ marginTop: 1 }}>
        <Grid item xs={12}>
          <Carousel images={screenshots} />
        </Grid>
        <Grid item xs={12} md={8} alignItems="stretch">
          <DescriptionCard requirements={game?.minimum_system_requirements} />

        </Grid>
        <Grid item xs={12} md={4}>
          <DescriptionCard displayName={game?.short_description} />

        </Grid>

        <Grid item xs={12}>
          <FormGame setComments={addComments} />

        </Grid>
      </Grid>
    </Container>
  );
};
