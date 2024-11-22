import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css"; // Importing CSS module

const testimonials = [
  {
    text: "Help us improve our productivity. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "Samantha William",
    position: "Senior Designer at Design Studio",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Their support team was quick to respond and helped us integrate the product seamlessly. Highly recommend it!",
    author: "James Michael",
    position: "Head of Marketing at TechWave",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Fantastic experience! The user interface is intuitive, and the onboarding process is very smooth.",
    author: "Alice Brown",
    position: "Project Manager at Bright Solutions",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  // Manually navigate reviews
  const handleNavigation = (index) => {
    setCurrent(index);
  };

  return (
    <div className={styles.reviewSection}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <h1 className={styles.heading}>What Our Customers Are Saying</h1>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <p className={styles.reviewText}>{testimonials[current].text}</p>
        <div className={styles.authorSection}>
          <img
            src={testimonials[current].avatar}
            alt={testimonials[current].author}
            className={styles.avatar}
          />
          <div>
            <p className={styles.authorName}>{testimonials[current].author}</p>
            <p className={styles.authorPosition}>
              {testimonials[current].position}
            </p>
          </div>
        </div>
        {/* Navigation Dots */}
        <div className={styles.dotsContainer}>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={current === index ? styles.activeDot : styles.dot}
              onClick={() => handleNavigation(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
