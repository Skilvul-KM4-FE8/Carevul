import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Ini Navbar</h1>

      <Outlet />
    </>
  );
};

export default Layout;
