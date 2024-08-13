import './Error.scss';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar.jsx';
import Footer from '../layout/Footer.jsx';
import MainContainer from '../layout/MainContainer.jsx';

function Error() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="container">
          <img src="../../public/404.png" className="png" />
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="home">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Error;
