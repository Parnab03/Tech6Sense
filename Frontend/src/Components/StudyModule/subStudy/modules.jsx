import React from "react";
import StyleSheet from "./modules.module.css";
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
    <div className={StyleSheet.modules}>
    {menuItems.map((item, index) => (
    <div className={StyleSheet.mainModule}>
            <div key={index} className={StyleSheet.moduleBox}>
                <h3 className={StyleSheet.moduleTitle}>{item.title}</h3>
                <ul className={StyleSheet.subItems}>
                    {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className={StyleSheet.subItem}>
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