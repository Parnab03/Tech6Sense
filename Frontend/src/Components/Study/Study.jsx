import styles from "./Study.module.css";
const Study = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.imageSection}>
        <img
          src="https://img.pikbest.com/png-images/20190826/cartoon-textured-golden-medal-element_2528140.png!sw800"
          alt=""
          className={styles.illustration}
        />
      </div>
      <div className={styles.textSection}>
        <h2>For Placement</h2>
        <ul>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Typesetting industry. Lorem Ipsum</li>
          <li>Has been the industry's standard dummy text</li>
        </ul>
        <button className={styles.visitBtn}>Visit</button>
      </div>
    </div>
  );
}
export default Study;