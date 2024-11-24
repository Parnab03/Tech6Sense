import React from "react";
import NotFound from "/404NotFound.svg";
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.container}>
            <img className={styles.error} src={NotFound} alt="404 Error" />
        </div>
    );
};

export default Error;
