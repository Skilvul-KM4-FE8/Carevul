import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ini Navbar Pokoknya, nanti ganti aja</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link">Home</NavLink>
            <NavLink to={"/paymentdoctor"} className="nav-link">Payment Test</NavLink>
            <NavLink to={"/listdoctor"} className="nav-link">List Doctor</NavLink>
            <NavLink to={"/articlehome"} className="nav-link">Artikel</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;