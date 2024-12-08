import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import background from "/TempBanner.svg";
import background2 from "../../../assets/background.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const images = [
    { src: background, title: "Slide 1 Title" },
    { src: background2, title: "Slide 2 Title" },
    { src: background, title: "Slide 3 Title" },
    { src: background2, title: "Slide 4 Title" },
];

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Function to go to the next slide
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Automatically slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);

    return (
        <div className={styles.slider}>
            <div className={styles.sliderMain}>
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.sliderMainimg}
                />
                <div className={styles.navigationButtons}>
                    <button className={styles.navButton} onClick={prevSlide}>
                        <IoIosArrowDropleft />
                    </button>
                    <button className={styles.navButton} onClick={nextSlide}>
                        <IoIosArrowDropright />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
