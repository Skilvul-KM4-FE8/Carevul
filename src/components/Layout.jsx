import { Outlet } from "react-router-dom";
import NavbarComponent from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <h3>Footer</h3>
    </>
  );
};

export default Layout;
