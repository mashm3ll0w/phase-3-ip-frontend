import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="site-navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-container">
          <NavLink className="navbar-brand" to="/">MovCon System</NavLink>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Routes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vehicles">
                  Vehicles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/passengers">
                  Passengers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/drivers">
                  Drivers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
