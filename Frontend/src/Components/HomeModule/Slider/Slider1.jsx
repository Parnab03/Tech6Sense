import React from "react";
import styles from "./Slider1.module.css"; // Import CSS module

const Slider1 = () => {
    const images = [
        "https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2020/08/accenture-logo-672x284px.png",
        "https://1000marcas.net/wp-content/uploads/2021/08/Capgemini-Logo-1-1280x720.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
        "https://vectorseek.com/wp-content/uploads/2023/10/Larsen-Toubro-LT-Logo-Vector.svg-.png",
        "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-2018.png",
        "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png",
        "https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2020/08/accenture-logo-672x284px.png",
        "https://logos-world.net/wp-content/uploads/2022/06/Capgemini-Logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
        "https://vectorseek.com/wp-content/uploads/2023/10/Larsen-Toubro-LT-Logo-Vector.svg-.png",
        "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-2018.png",
        "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png",
    ];
    const images2 = [
        "https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2020/08/accenture-logo-672x284px.png",
        "https://1000marcas.net/wp-content/uploads/2021/08/Capgemini-Logo-1-1280x720.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
        "https://vectorseek.com/wp-content/uploads/2023/10/Larsen-Toubro-LT-Logo-Vector.svg-.png",
        "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-2018.png",
        "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png",
        "https://s32519.pcdn.co/es/wp-content/uploads/sites/3/2020/08/accenture-logo-672x284px.png",
        "https://logos-world.net/wp-content/uploads/2022/06/Capgemini-Logo.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
        "https://vectorseek.com/wp-content/uploads/2023/10/Larsen-Toubro-LT-Logo-Vector.svg-.png",
        "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-2018.png",
        "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png",
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.scrollContainer}>
                <div className={styles.scrollContent}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={styles.scrollImage}
                            />
                        </div>
                    ))}
                    {images.map((image, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={styles.scrollImage}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.scrollContent2}>
                    {images2.map((image, index) => (
                        <div key={index} className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={styles.scrollImage2}
                            />
                        </div>
                    ))}
                    {images2.map((image, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className={styles.imageContainer}>
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={styles.scrollImage2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider1;
