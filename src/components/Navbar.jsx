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
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink to={"/"} className="nav-link">Home</NavLink>
            <NavLink to={"/list-doctor"} className="nav-link">List Doctor</NavLink>
            <NavLink to={"/testt"} className="nav-link">Menu klen</NavLink>
            {/* <Nav.Link href="#features">Pilih Dokter</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;