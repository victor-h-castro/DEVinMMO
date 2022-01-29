/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import { GameProps } from 'type/game';
import { GameListProps } from 'type/gameList';
import { NewsListProps } from 'type/newsList';
import axiosMMO from 'util/axios';

export const useMmoService = () => ({
  fetchGameListData: async (): Promise<GameListProps[]> => {
    const mmoList:GameListProps[] = (await axiosMMO.get<GameListProps[]>('/games')).data;
    return mmoList;
  },

  fetchNewsListData: async (): Promise<NewsListProps[]> => {
    const newsList = (await axiosMMO.get<NewsListProps[]>('/latestnews')).data;
    return newsList;
  },
  fetchGameData: async (id:string): Promise<GameProps> => {
    const game : GameProps = (await axiosMMO.get<GameProps>('/game', { params: { id } })).data;
    return game;
  },

});
