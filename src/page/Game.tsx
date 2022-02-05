/* eslint-disable max-len */
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
import { StorageProps } from 'type/storage';
import useStorage from 'hook/useStorage';

export const Game = () => {
  const StorageSchema: StorageProps[] = [];
  const [commentsFromStorage, setCommentsFromStorage] = useStorage<StorageProps[]>('DevInMMO', StorageSchema);
  const { fetchGameListData, fetchNewsListData, fetchGameData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<FormProps | null>(null);
  const [renderComments, setRenderComments] = useState<StorageProps[]>([]);

  const [game, setGame] = useState<GameProps>();
  const [screenshots, setScreenshots] = useState<string[]>([]);

  const { state } = useContext(SettingsContext);
  const { gameId } = useParams();

  const addComments = async (comment:FormProps) => {
    setComments(comment);
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
    const idComments = commentsFromStorage.filter((element : StorageProps) => !!gameId && element.id === +gameId);
    setRenderComments(idComments);
  }, []);
  useEffect(() => {
    if (comments && !!gameId) {
      const commentToStorage :StorageProps = {
        id: +gameId,
        user: comments?.fullName ?? '',
        comment: comments?.comment ?? '',
        votes: 0,
      };
      setCommentsFromStorage([...commentsFromStorage, commentToStorage]);
    }
  }, [comments]);
  console.log(commentsFromStorage);
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
