import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return <>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Node Start</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Start</NavLink>
            <NavLink className="nav-link" to="/about-us">About us</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}