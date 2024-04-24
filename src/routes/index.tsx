import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { pageRoutes } from './path';
import { MainPage, ErrorPage, NotFoundPage } from '@/pages';

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
