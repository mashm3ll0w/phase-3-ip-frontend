export default function NavBar() {
  return (
    <div id="site-navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid nav-container">
          <p className="navbar-brand">MovCon System</p>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/routes">
                  Routes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vehicles">
                  Vehicles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/passengers">
                  Passengers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/drivers">
                  Drivers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
