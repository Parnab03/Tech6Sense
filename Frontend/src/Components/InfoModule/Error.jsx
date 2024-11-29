import React from "react";
import NotFound from "/404NotFound.svg";
import styles from "./Error.module.css";
import Navbar from "../CommonModule/Navbar/Navbar";
import Footer from "../CommonModule/Footer/Footer";

const Error = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <img className={styles.error} src={NotFound} alt="404 Error" />
            </div>
            <Footer />
        </>
    );
};

export default Error;
