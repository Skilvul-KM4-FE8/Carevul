import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";
import "./../styles/Navbar.css";


function BasicExample() {
  return (

    <Navbar bg="light" expand="lg">
      <Container className="mx-auto">
        <Navbar.Brand href="#">
          {" "}
          <div className="logoApp">
            <img src={CarevulLogo} alt="Carevul Logo" />{" "}
          </div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/paymentdoctor"} className="nav-link ">
              Payment Test
            </NavLink>
            <NavLink to={"/listdoctor"} className="nav-link ">
              List Doctor
            </NavLink>
            <NavLink to={"/testt"} className="nav-link ">
              Menu klen
            </NavLink>

          </Nav>
          <Nav className="ms-auto gap-3">
            <NavLink
              to={"/login"}
              className="login btn text-carevul border-carevul"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="btn color-carevul-gradient text-white"
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
