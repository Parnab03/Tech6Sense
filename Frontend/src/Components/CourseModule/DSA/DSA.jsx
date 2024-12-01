import styles from "./DSA.module.css";
import background from "/TempBanner.svg";
import Modules from "./modules";
import Navbar from "../../CommonModule/Navbar/Navbar";
import Footer from "../../CommonModule/Footer/Footer";
import SideNav from "./SideNav";
const DSA = () => {
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <SideNav />
                <div className={styles.subjectSection}>
                    <img
                        src={background}
                        alt="#"
                        className={styles.background}
                    />
                    <div className={styles.intro}>
                        <div className={styles.text}>
                            ontrary to popular belief, Lorem Ipsum is not simply
                            random text. It has roots in a piece of classical
                            Latin literature from 45 BC, making it over 2000
                            years old. ontrary to popular belief, Lorem Ipsum is
                            not simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.
                        </div>
                        <button className={styles.btn}>Start Now</button>
                    </div>
                    <Modules />
                    <Modules />
                    <Modules />
                </div>
            </div>
            <Footer />
        </>
    );
};
export default DSA;
