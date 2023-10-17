import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Házifeladatok</Link>
          </li>
          <li>
            <Link to="/calendar">Naptár</Link>
          </li>
          <li>
            <Link to="/aboutus">Rólunk</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;