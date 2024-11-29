import styles from "./Courseslider.module.css";
import C from "./C.svg";
import DBMS from "./DBMS.svg";
import DSA from "./DSA.svg";
import IOT from "./IOT.svg";
import JAVA from "./JAVA.svg";
import SAP from "./SAP.svg";
import SAPABAP from "./SAPABAP.svg";
import SAPH4HANA from "./SAPS4HANA.svg";

const Courseslider = () => {
    const images = [
        C,
        DBMS,
        SAPH4HANA,
        IOT,
        DSA,
        C,
        SAPABAP,
        JAVA,
        SAP,
        C,
        DBMS,
        IOT,
        DSA,
        SAPH4HANA,
    ];
    const images2 = [
        C,
        DBMS,
        SAPH4HANA,
        IOT,
        DSA,
        C,
        SAPABAP,
        JAVA,
        SAP,
        C,
        DBMS,
        IOT,
        DSA,
        SAPH4HANA,
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
export default Courseslider;
