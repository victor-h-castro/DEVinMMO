/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
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
import NewsCard from 'component/NewsCard';
import { SettingsContext } from 'context/SettingContext';
import { useContext, useEffect, useState } from 'react';
import { useMmoService } from 'service/useMmoService';
import { GameProps } from 'type/game';
import { GameListProps } from 'type/gameList';
import { NewsListProps } from 'type/newsList';

export const News = () => {
  const { fetchNewsListData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);
  const [gameListRender, setGameListRender] = useState<GameListProps[]>();
  const [newsList, setNewsList] = useState<NewsListProps[]>();
  const { state } = useContext(SettingsContext);
  function shuffleArr(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
  }

  const fetchNewsList = async () => {
    setLoading(true);
    const newsListData :NewsListProps[] = await fetchNewsListData();
    console.log(newsListData);
    shuffleArr(newsListData);
    setNewsList(() => newsListData);
    setLoading(() => true);
  };

  useEffect(() => {
    (async () => {
      await fetchNewsList();
    })();
  }, []);

  return (
    <Grid direction="row" justifyContent="center" spacing={2} container px={2} sx={{ marginTop: 1 }}>
      <Grid justifyContent="center" container item spacing={2} xs={12} sm={10}>
        {newsList?.filter((element) => element.title.toLowerCase().includes(state))?.map(({
          article_url, title, main_image, short_description,
        }) => (
          <Grid item xs={10} lg={7}>
            <NewsCard
              externalUrl={article_url}
              title={title}
              thumbnail={main_image}
              description={short_description}
            />
          </Grid>
        )) }
      </Grid>
    </Grid>
  );
};