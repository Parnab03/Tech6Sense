import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.png"; 
import styles from "./Navbar.module.css";
const Navbar = () => {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg bg-body-tertiary ${styles.mainContainer}`}
        >
          <div className={`container-fluid ${styles.containerMain}`}>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${styles.navMain}`}
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                <li clasNames={`nav-item `}>
                  <a
                    className={`nav-link active `}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Study
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-disabled="page" href="#">
                    Placement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-disabled="page" href="#">
                    About
                  </a>
                </li>
              </ul>
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  alt="Logo"
                  width="150"
                  height="45"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
          </div>
        </nav>
      </>
    );

}
export default Navbar;