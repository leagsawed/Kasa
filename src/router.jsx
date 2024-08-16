import BaseLayout from './layout/BaseLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import Apartment from './pages/Apartment.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/logement',
        element: <Apartment />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
