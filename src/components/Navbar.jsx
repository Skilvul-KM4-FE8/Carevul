import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";

const NavbarComponent = () => {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">
            Ini Navbar Pokoknya, nanti ganti aja
          </Navbar.Brand> */}

          <div className="App">
            <img src={CarevulLogo} alt="Your SVG" />
          </div>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/paymentdoctor"} className="nav-link">
              Payment Test
            </NavLink>
            <NavLink to={"/listdoctor"} className="nav-link">
              List Doctor
            </NavLink>
            <NavLink to={"/testt"} className="nav-link">
              Menu klen
            </NavLink>
            {/* <Nav.Link href="#features">Pilih Dokter</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
