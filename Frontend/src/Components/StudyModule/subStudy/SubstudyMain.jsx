import SubStudy from "./subStudy";
import StyleSheet from "./SubstudyMain.module.css";
import background from "../../../assets/background.png";
import Modules from "./modules";
import Navbar from "../../CommonModule/Navbar/Navbar";
import Footer from "../../CommonModule/Footer/Footer";
const SubstudyMain = () => {
  return (
    <>
    <Navbar />
      <div className={StyleSheet.main}>
        <SubStudy />
        <div className={StyleSheet.subjectSection}>
          <img src={background} alt="#" className={StyleSheet.background} />
          <div className={StyleSheet.intro}>
            <p className={StyleSheet.text}>
              ontrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <button className={StyleSheet.btn}>Start Now</button>
          </div>
          <Modules></Modules>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default SubstudyMain;