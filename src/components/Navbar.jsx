import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CarevulLogo from "../assets/carevul-logo.svg";
import "./../styles/Navbar.css";
import { Container, Button, Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function BasicExample() {
  // Ubah status Login di navbar
  // const sessionName = sessionStorage.getItem("name");
  // const sessionEmail = sessionStorage.getItem("email");
  // const sessionId = sessionStorage.getItem("id");
  // const navbarLoginOrNot = document.querySelector("#navbar-login-or-not");

  // get data logged user from local storage

  const isLoggedIn = JSON.parse(localStorage.getItem("idUser")); // // true or false
  console.log(isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("idUser");
    window.location.reload();
    console.log("logout Account");
  };

  let component = "";
  if (!isLoggedIn) {
    component = (
      <>
        <div className="text-center ">
          <NavLink
            to={"/login"}
            className="logindong btn text-carevul border-carevul m-1"
          >
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className="btn color-carevul-gradient text-white m-1"
          >
            Register
          </NavLink>
        </div>
      </>
    );
  } else {
    component = (
      <>
        <div className="text-center">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Account&nbsp;</Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="text-center mx-4">
                <img
                  height={50}
                  className="text-center justify-center"
                  src={isLoggedIn.img}
                />

                <h5 className="ms-auto text-center">{isLoggedIn.name}</h5>

                <Button
                  onClick={handleLogout}
                  // onClick={window.localStorage.clear()}
                  className="logindong text-white text-carevul border-carevul py-2"
                >
                  Logout
                </Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar bg="light" expand="lg" fluid>
        <Container className="mx-auto">
          <Navbar.Brand href="#">
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
              <NavLink to={"/articlehome"} className="nav-link ">
                Artikel
              </NavLink>
              <NavLink to={"/bmicalculator"} className="nav-link ">
                Kalkulator BMI
              </NavLink>
            </Nav>
            <Nav className="ms-auto gap-1">
              <div id="navbar-login-or-not">
                {component}
                {/* not login */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
