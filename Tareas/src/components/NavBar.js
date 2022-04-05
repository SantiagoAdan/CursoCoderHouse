import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Coder-Gamer</NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavLink to='/category/Procesador' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Procesadores</NavLink>
              <NavDropdown.Item href="#action/3.2">
              <NavLink to='/category/PlacasDeVideo' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Placas de Video</NavLink>
               
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <NavLink to='/category/RAM' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Memoria Ram</NavLink>

                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <NavLink to='/*' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Arma Tu PC</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Financiacion</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
            <Nav.Link>
              <Button variant="outline-light rounded-pill">Log In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
