import React from "react";
import logo from "/Tech6SenseLogo.svg";
import background from "/TempBanner.svg";
import StudyEle from "./StudyEle";
import Navbar from "../CommonModule/Navbar/Navbar";
import Footer from "../CommonModule/Footer/Footer";

const Study = () => {
    return (
        <>
            <Navbar />
            <div className="cardsBody">
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
            </div>
            <Footer />
        </>
    );
};

export default Study;
