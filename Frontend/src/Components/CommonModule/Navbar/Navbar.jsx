import Tech6SenseLogo from "/Tech6SenseLogo.svg";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        <img
                            src={Tech6SenseLogo}
                            alt="Logo"
                            width="150"
                            height="45"
                        />
                    </NavLink>
                </div>
                <div
                    className={styles.navToggle}
                    onClick={() =>
                        document
                            .getElementById("nav-links")
                            .classList.toggle(styles.active)
                    }>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
                <ul id="nav-links" className={styles.navLinks}>
                    <li>
                        <NavLink
                            className={styles.navLink}
                            to="/"
                            exact
                            activeClassName={styles.activeLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.navLink}
                            to="/course"
                            activeClassName={styles.activeLink}>
                            Course
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.navLink}
                            to="/placement"
                            activeClassName={styles.activeLink}>
                            Placement
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.navLink}
                            to="/about"
                            activeClassName={styles.activeLink}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
