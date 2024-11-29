import styles from "./AdminStudy.module.css";
import React, { useState } from "react";

const AdminStudy = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const menuItems = [
        {
            title: "Upload Content",
        },
        {
            title: "Edit Content",
        },
        {
            title: "History",
        },
    ];

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sideNavbar}>
                    <ul className={styles.menuList}>
                        {menuItems.map((item, index) => (
                            <li key={index} className={styles.menuItem}>
                                <div
                                    onClick={() => handleDropdown(index)}
                                    className={styles.menuTitle}>
                                    {item.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.contentBox}>
                    <div className={styles.formBoxes}>
                        <div className={styles.box}>
                            <h5>Select Subject</h5>
                        </div>
                        <div className={styles.box}>
                            <h5>Select Module</h5>
                        </div>
                        <div className={styles.box}>
                            <h5>Select Lecture</h5>
                        </div>
                    </div>
                    <div className={styles.mainContent}>
                        <h1>main content</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminStudy;
