import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import Apartment from './pages/Apartment.jsx';
import About from './pages/About.jsx';
import Error from './pages/Error.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './pages/HomePage.scss';
import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import MainContainer from './layout/MainContainer.jsx';

export const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
