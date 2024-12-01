import React from "react";
import styles from "./modules.module.css";
const menuItems = [
    {
        title: "Module 1",
        subItems: ["Lecture 1", "Lecture 2"],
    },
    {
        title: "Module 2",
        subItems: ["Lecture 3", "Lecture 4"],
    },
    {
        title: "Module 3",
        subItems: ["Lecture 3", "Lecture 4"],
    },
];
const modules = () => {
    return (
        <div className={styles.modules}>
            {menuItems.map((item, index) => (
                <div className={styles.mainModule}>
                    <div key={index} className={styles.moduleBox}>
                        <h3 className={styles.moduleTitle}>{item.title}</h3>
                        <ul className={styles.subItems}>
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} className={styles.subItem}>
                                    {subItem}:-
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default modules;
