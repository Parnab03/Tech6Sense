import React, { useState } from "react";
import styles from "./MobileInfo.module.css";

const MobileInfo = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className={styles.popupContainer}>
                <div className={styles.popup}>
                    <button className={styles.closeButton} onClick={closePopup}>
                        &times;
                    </button>
                    <h1 className={styles.heading}>Oops!</h1>
                    <p className={styles.message}>
                        This website is not optimized for Mobiles and Tabs yet.{" "}
                        <br />
                        Please visit us on a <b>Desktop</b> or <b>Laptop</b> for
                        the best experience.
                    </p>
                </div>
            </div>
        )
    );
};

export default MobileInfo;
