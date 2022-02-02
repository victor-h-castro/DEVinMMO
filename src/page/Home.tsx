/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */

import { useEffect, useState } from 'react';
import { useMmoService } from 'service/useMmoService';
import { GameProps } from 'type/game';
import { GameListProps } from 'type/gameList';
import { NewsListProps } from 'type/newsList';

export const Home = () => {
  const { fetchGameListData, fetchNewsListData, fetchGameData } = useMmoService();
  const [loading, setLoading] = useState<boolean>(false);
  const [gameList, setGameList] = useState<GameListProps[]>();
  const [newsList, setNewsList] = useState<NewsListProps[]>();
  const [game, setGame] = useState<GameProps>();

  const fetchGameList = async () => {
    setLoading(true);
    const gameListData :GameListProps[] = await fetchGameListData();
    setGameList(() => gameListData);
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
  return (

    <h1>TESTE</h1>
  );
};
