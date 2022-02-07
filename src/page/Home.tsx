/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import { Grid } from '@mui/material';
import ImageCard from 'component/ImageCard';
import { Loading } from 'component/Loading';
import { SettingsContext } from 'context/SettingContext';
import { useContext, useEffect, useState } from 'react';
import { useMmoService } from 'service/useMmoService';
import { GameProps } from 'type/game';
import { GameListProps } from 'type/gameList';
import { shuffleArr } from 'util/shuffleArray';

export const Home = () => {
  const { fetchGameListData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(true);
  const [gameList, setGameList] = useState<GameListProps[]>();
  const { state, setState } = useContext(SettingsContext);

  const fetchGameList = async () => {
    try {
      setLoading(() => true);
      const gameListData :GameListProps[] = await fetchGameListData();
      shuffleArr(gameListData);
      setGameList(() => gameListData);
      setLoading(() => false);
    } catch {
      setLoading(() => false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchGameList();
    })();
    return () => {
      setState('');
    };
  }, []);

  return (
    <Loading loading={loading}>
      <Grid direction="row" spacing={5} container px={2} sx={{ marginTop: 1 }}>
        <Grid container item spacing={5} xs={12}>
          {gameList?.filter((element) => element.title.toLowerCase().includes(state.toLowerCase()))?.map(({
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
    </Loading>
  );
};
