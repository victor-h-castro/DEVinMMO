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

export const Home = () => {
  const { fetchGameListData, fetchNewsListData, fetchGameData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);
  const [gameList, setGameList] = useState<GameListProps[]>();
  const [gameListRender, setGameListRender] = useState<GameListProps[]>();
  const [newsList, setNewsList] = useState<NewsListProps[]>();
  const [game, setGame] = useState<GameProps>();
  const { state } = useContext(SettingsContext);

  const fetchGameList = async () => {
    setLoading(true);
    const gameListData :GameListProps[] = await fetchGameListData();
    setGameList(() => gameListData);
    setGameListRender(() => gameListData);
    setLoading(() => true);
  };

  const fetchNewsList = async () => {
    setLoading(true);
    const newsListData :NewsListProps[] = await fetchNewsListData();
    setNewsList(() => newsListData);
    setLoading(() => true);
  };
  const fetchGame = async (id:string) => {
    setLoading(true);
    const gameData :GameProps = await fetchGameData(id);
    setGame(() => gameData);
    setLoading(() => true);
  };
  useEffect(() => {
    (async () => {
      await fetchGameList();
      await fetchGameData('2');
    })();
  }, []);
  useEffect(() => {
    setGameListRender((previous) => {
      return gameList?.filter((element) => element.title.toLowerCase().includes(state));
    });
  }, [state]);

  return (
    <Grid direction="row" spacing={5} container px={2} sx={{ marginTop: 1 }}>
      <Grid container item spacing={5} xs={12}>
        {gameListRender?.map(({
          id, title, thumbnail, short_description,
        }) => (
          <Grid item xs={12} md={6} lg={4}>
            <ImageCard
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={short_description}
            />
          </Grid>
        )) }
      </Grid>
    </Grid>
  );
};
