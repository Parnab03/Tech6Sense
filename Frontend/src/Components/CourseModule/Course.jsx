import React from "react";
import background from "/TempBanner.svg";
import StudyEle from "./StudyEle";
import Navbar from "../CommonModule/Navbar/Navbar";
import Footer from "../CommonModule/Footer/Footer";
import { NavLink } from "react-router-dom";

const Course = () => {
    return (
        <>
            <Navbar />
            <div className="cardsBody">
                <NavLink to="/course/sapabap">
                    <StudyEle image={background} titel="Web Devlopment" />
                </NavLink>
                <NavLink to="/course/saphana">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
                <NavLink to="/course/java">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
                <NavLink to="/course/c">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
                <NavLink to="/course/dsa">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
                <NavLink to="/course/dbms">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
                <NavLink to="/course/iot">
                    <StudyEle image={background} titel="Java Programming" />
                </NavLink>
            </div>
            <Footer />
        </>
    );
};

export default Course;
