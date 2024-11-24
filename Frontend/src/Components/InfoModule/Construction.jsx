import React from "react";
import UnderConstruction from "../../assets/UnderConstruction.jpg";
import styles from "./Construction.module.css";

const Construction = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.error}
                src={UnderConstruction}
                alt="404 Error"
            />
        </div>
    );
};

export default Construction;
