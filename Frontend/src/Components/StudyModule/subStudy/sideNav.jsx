import React, { useState } from "react";
import styles from "./sideNav.module.css"; 

const sideNav = ({ menuItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.sideNavbar}>
      <div className={styles.logo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
          alt="SAP Logo"
          className={styles.logoImage}
        />
      </div>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <div
              onClick={() => handleDropdown(index)}
              className={styles.menuTitle}
            >
              {item.title}
            </div>
            {item.subItems.length > 0 && openIndex === index && (
              <ul className={styles.dropdown}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.dropdownItem}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default sideNav;
