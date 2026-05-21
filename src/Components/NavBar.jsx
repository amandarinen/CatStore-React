import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Context/CartContext';
import { HouseFill, CupHotFill, InfoCircleFill, CartFill } from 'react-bootstrap-icons';

function NavBar() {

  const { cart } = useCart();

  return (
    <Navbar style={{backgroundColor: 'rgb(240, 166, 166)'}} expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/"><HouseFill /> Home</Nav.Link>
            <Nav.Link as={Link} to="/cats"><CupHotFill /> Our Cats</Nav.Link>
            <Nav.Link as={Link} to="/owner"><InfoCircleFill /> About us</Nav.Link>
            <Nav.Link as={Link} to="/cart">
            <CartFill /> Cart{' '}
            {cart.length > 0 && <span className="badge bg-white text-dark">{cart.length}</span>}
            </Nav.Link>         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;