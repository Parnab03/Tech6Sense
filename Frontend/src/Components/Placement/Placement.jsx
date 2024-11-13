import styles from "./Placement.module.css";
const Placement = () => {    
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>For Placement</h2>
          <ul className={styles.list}>
            <li>Lorem Ipsum is simply</li>
            <li>dummy text of the printing and</li>
            <li>typesetting industry. Lorem Ipsum</li>
            <li>has been the industry's standard dum</li>
          </ul>
          <button className={styles.button}>Visit</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://img.freepik.com/premium-vector/boy-with-glasses-holding-book-with-book-his-hand_1230457-42719.jpg"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    );
}
export default Placement;