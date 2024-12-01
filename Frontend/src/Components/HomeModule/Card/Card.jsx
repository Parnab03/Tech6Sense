import React, { useState } from "react";
import styles from "./Card.module.css";
import background from "/TempBanner.svg";
import background2 from "../../../assets/background.png";

const images = [background, background2, background, background2];

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

    return (
        <div className={styles.slider}>
            <div className={styles.sliderMain}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className={styles.sliderMainimg}
                />
                <div className={styles.leftArrow} onClick={prevSlide}>
                    &lt;
                </div>
                <div className={styles.rightArrow} onClick={nextSlide}>
                    &gt;
                </div>
            </div>
            <div className={styles.radioButtons}>
                {images.map((_, index) => (
                    <label key={index} className={styles.radiocontainer}>
                        <input
                            type="radio"
                            name="carousel"
                            checked={currentIndex === index}
                            onChange={() => setCurrentIndex(index)}
                        />
                        <span className={styles.checkMark}></span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Card;
