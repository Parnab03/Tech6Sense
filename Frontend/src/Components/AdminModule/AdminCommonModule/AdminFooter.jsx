import { BiCopyright } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import Tech6SenseAdminFooterLogo from "/Tech6SenseAdminFooterLogo.svg";
import styles from "./AdminFooter.module.css";
const AdminFooter = () => {
    return (
        <footer className={`Footer ${styles.mainfooter}`}>
            <p className={styles.text}>
                <BiCopyright />
                Tech6Sense | 2024
            </p>
            <p className={styles.text}>
                <a href="#">
                    Design and Dev by Astra <GoLinkExternal />
                </a>
            </p>
            <img
                className={styles.logo}
                src={Tech6SenseAdminFooterLogo}
                alt="Tech6SenseAdminFooterLogo"
            />
        </footer>
    );
};
export default AdminFooter;
