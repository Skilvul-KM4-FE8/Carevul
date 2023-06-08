import { Outlet } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Card from "./Card";

const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <h3>main 1</h3>

      <h3>main 2</h3>

      <h3>main article</h3>
      <Card />

      <h3>main 3</h3>

      <h3>Footer</h3>
    </>
  );
};

export default Layout;
