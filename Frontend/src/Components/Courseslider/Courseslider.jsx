import styles from "./Courseslider.module.css";
const Courseslider = () => {
  const images = [
    "https://img.icons8.com/plasticine/512/c-programming.png",
    "https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1764554240.jpg",
    "https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256",
    "https://www.svgrepo.com/show/376344/python.svg",
    "https://logowik.com/content/uploads/images/467_sap.jpg",
    "https://img.icons8.com/plasticine/512/c-programming.png",
    "https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1764554240.jpg",
    "https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256",
    "https://www.svgrepo.com/show/376344/python.svg",
    "https://logowik.com/content/uploads/images/467_sap.jpg",
  ];
  const images2 = [
    "https://img.icons8.com/plasticine/512/c-programming.png",
    "https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1764554240.jpg",
    "https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256",
    "https://www.svgrepo.com/show/376344/python.svg",
    "https://logowik.com/content/uploads/images/467_sap.jpg",
    "https://img.icons8.com/plasticine/512/c-programming.png",
    "https://www.shutterstock.com/image-vector/emblem-c-plus-programming-language-600nw-1764554240.jpg",
    "https://www.pngitem.com/pimgs/m/519-5194865_html-css-js-html-5-hd-png-download.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256",
    "https://www.svgrepo.com/show/376344/python.svg",
    "https://logowik.com/content/uploads/images/467_sap.jpg",
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Image ${index}`}
                className={styles.scrollImage}
              />
            </div>
          ))}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Image ${index}`}
                className={styles.scrollImage}
              />
            </div>
          ))}
        </div>
        <div className={styles.scrollContent2}>
          {images2.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Image ${index}`}
                className={styles.scrollImage2}
              />
            </div>
          ))}
          {images2.map((image, index) => (
            <div key={`duplicate-${index}`} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Image ${index}`}
                className={styles.scrollImage2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Courseslider;