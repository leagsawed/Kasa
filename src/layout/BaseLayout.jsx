import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import MainContainer from './MainContainer.jsx';

function BaseLayout() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}

export default BaseLayout;
