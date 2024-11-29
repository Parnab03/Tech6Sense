import React from "react";
import UnderConstruction from "../../assets/UnderConstruction.jpg";
import styles from "./Construction.module.css";
import Footer from "../CommonModule/Footer/Footer";
import Navbar from "../CommonModule/Navbar/Navbar";

const Construction = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <img
                    className={styles.error}
                    src={UnderConstruction}
                    alt="404 Error"
                />
            </div>
            <Footer />
        </>
    );
};

export default Construction;
