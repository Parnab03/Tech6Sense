import React from "react";
import logo from "/Tech6SenseLogo.svg";
import background from "/TempBanner.svg";
import StudyEle from "./StudyEle";

const Study = () => {
    return (
        <>
            <div className="cardsBody">
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
                <StudyEle image={logo} titel="Web Devlopment" />
                <StudyEle image={background} titel="Java Programming" />
                
                
            </div>
        </>
    );
};

export default Study;
