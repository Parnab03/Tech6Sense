import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={`Footer ${styles.mainfooter}`}>
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-4">
              <h3 class="fw-bold">Coding Yaar</h3>
              <p class="pt-2">
                321, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p class="mb-2">0987654321</p>
              <p>1234567890</p>
            </div>
            <div class="col">
              <h4>Menu</h4>
              <ul class="list-unstyled pt-2">
                <li class="py-1">Home</li>
                <li class="py-1">Shorts</li>
                <li class="py-1">About</li>
                <li class="py-1">Contact</li>
              </ul>
            </div>
            <div class="col">
              <h4>More</h4>
              <ul class="list-unstyled pt-2">
                <li class="py-1">Landing Pages</li>
                <li class="py-1">FAQs</li>
              </ul>
            </div>
            <div class="col">
              <h4>Categories</h4>
              <ul class="list-unstyled pt-2">
                <li class="py-1">Navbars</li>
                <li class="py-1">Cards</li>
                <li class="py-1">Buttons</li>
                <li class="py-1">Carousels</li>
              </ul>
            </div>
            <div class="col-6 col-lg-3">
              <h4>Social Media Links</h4>
            </div>
          </div>
        </div>
      </footer>
  );
}
export default Footer;