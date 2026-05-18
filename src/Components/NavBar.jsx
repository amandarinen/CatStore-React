import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faPaw} /> Home</Link></li>
          <li><Link to="/cats"><FontAwesomeIcon icon={faPaw} /> Our Cats</Link></li>
          <li><Link to="/owner"><FontAwesomeIcon icon={faPaw} /> About us</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faPaw} /> Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;