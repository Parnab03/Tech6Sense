import { BiCopyright } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import Tech6SenseFooterLogo from "/Tech6SenseFooterLogo.svg";
import styles from "./Footer.module.css";
const Footer = () => {
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
                src={Tech6SenseFooterLogo}
                alt="Tech6SenseFooterLogo"
            />
        </footer>
    );
};
export default Footer;
