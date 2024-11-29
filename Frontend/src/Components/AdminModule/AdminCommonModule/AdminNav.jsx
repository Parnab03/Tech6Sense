import Tech6SenseAdminPanelLogo from "/Tech6SenseAdminPanelLogo.svg";
import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.css";

const AdminNav = () => {
    return (
        <nav>
            <div className={styles.topNav}>
                <img
                    src={Tech6SenseAdminPanelLogo}
                    alt="Tech6SenseAdminPanelLogo"
                />
                <div>
                    <NavLink aria-current="page" to="/admin/study">
                        <button className={styles.btn}>Study</button>
                    </NavLink>
                    <NavLink aria-current="page" to="/admin/placement">
                        <button className={styles.btn}>Placement</button>
                    </NavLink>
                    <NavLink aria-current="page" to="/admin/banner">
                        <button className={styles.btn}>Banner</button>
                    </NavLink>
                    <NavLink aria-current="page" to="/">
                        <button className={styles.btn}>Home</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default AdminNav;
