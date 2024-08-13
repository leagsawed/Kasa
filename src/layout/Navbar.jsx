import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">
          <img src="../../public/Kasa_Logo.png" alt="Kasa Logo" />
        </Link>
      </div>
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
