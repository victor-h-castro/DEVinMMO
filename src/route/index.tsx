/* eslint-disable import/no-unresolved */
import DefaultLayout from 'layout/DefaultLayout';
import { Home } from 'page/Home';
import { Game } from 'page/Game';
import { Navigate, useRoutes } from 'react-router-dom';
import { News } from 'page/News';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/news', element: <News /> },
        { path: '/game/:gameId', element: <Game /> },
        { path: '*', element: <Navigate to="/home" replace /> },
      ],
    },

  ]);
}
