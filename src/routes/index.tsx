import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import MainPage from '@/pages/MainPage';
import ErrorPage from '@/pages/ErrorPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { pageRoutes } from './path';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: pageRoutes.main, element: <MainPage />, errorElement: <ErrorPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
