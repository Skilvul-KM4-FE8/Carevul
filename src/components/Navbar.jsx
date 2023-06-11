import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";
import { Button } from "react-bootstrap";
import "./../styles/Navbar.css";

const NavbarComponent = () => {
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">
            {" "}
            <div className="logoApp">
              <img src={CarevulLogo} alt="Your SVG" />
            </div>
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link active">
              Home
            </NavLink>
            <NavLink to={"/paymentdoctor"} className="nav-link active">
              Payment Test
            </NavLink>
            <NavLink to={"/listdoctor"} className="nav-link active">
              List Doctor
            </NavLink>
            <NavLink to={"/testt"} className="nav-link active">
              Menu klen
            </NavLink>
            <NavLink to={"/"} className="nav-link active">
              <Button variant="outline-primary">Login</Button>
            </NavLink>
            <NavLink to={"/"} className="nav-link active">
              <Button variant="primary">Register</Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
