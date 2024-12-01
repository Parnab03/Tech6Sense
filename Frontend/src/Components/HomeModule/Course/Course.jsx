import styles from "./Course.module.css";
import img from "./PlacementPage.png";
import forPlacement from "./For_Placement.svg";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
const Course = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <img
                    src={forPlacement}
                    alt="forPlacement"
                    className={styles.forPlacement}
                />
                <p className={styles.list}>
                    <TbSquareRoundedArrowRight /> Lorem Ipsum is simply
                </p>
                <p className={styles.list}>
                    <TbSquareRoundedArrowRight /> Lorem Ipsum is simply 2
                </p>
                <p className={styles.list}>
                    <TbSquareRoundedArrowRight /> Lorem Ipsum is simply 3rd
                </p>
                <p className={styles.list}>
                    <TbSquareRoundedArrowRight /> Lorem Ipsum is simply forth
                </p>
                <button className={styles.button}>Visit Now</button>
            </div>
            <div className={styles.imageContainer}>
                <img src={img} alt="PlacementPage" className={styles.image} />
            </div>
        </div>
    );
};
export default Course;
