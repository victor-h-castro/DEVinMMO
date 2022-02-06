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
        { element: <Navigate to="/home" replace />, index: true },
        { path: '/home', element: <Home /> },
        { path: '/home/news', element: <News /> },
        { path: '/game/:gameId', element: <Game /> },
      ],
    },

  ]);
}
