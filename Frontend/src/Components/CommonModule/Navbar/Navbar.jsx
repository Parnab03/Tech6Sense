// import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../../public/images/logo.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav
                className={`navbar navbar-expand-lg bg-body-tertiary ${styles.mainContainer}`}>
                <div className={`container-fluid ${styles.containerMain}`}>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${styles.navMain}`}
                        id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                            <li clasNames={`nav-item `}>
                                <NavLink
                                    className={`nav-link active `}
                                    aria-current="page"
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/study">
                                    Study
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-disabled="page"
                                    to="/placement">
                                    Placement
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-disabled="page"
                                    to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand" to='/'>
                            <img
                                src={logo}
                                alt="Logo"
                                width="150"
                                height="45"
                                class="d-inline-block align-text-top"
                            />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
