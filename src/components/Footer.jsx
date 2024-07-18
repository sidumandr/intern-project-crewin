import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = ({ onLogin }) => {
  return (
    <>
      <div className={styles.footerUp}>
        <div className={styles.left}>
          <ul className={styles.company}>
            <h3>Company</h3>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul>
            <h3>Platform</h3>
            <li>Pricing Table</li>
            <li>Seafarer</li>
            <li>Company</li>
            <li>Career</li>
            <li>Mobile Apps</li>
          </ul>
        </div>
        <div className={styles.right}>
          <img src="./images/layer2.png" />
          <p>
            MARITIME WORKFORCE PLATFORM THAT MEETS <br />
            SHEFARERS & SEAFARERS WITH SHIPPING COMPANIES
          </p>
          <button onClick={onLogin}>Login</button>
        </div>
      </div>

      <div className={styles.footerDown}>
        <div className={styles.copyright}>
          <img src="./images/celsius.png" alt="" />
          copyright 2024 by CreWin. All Rights Reserved.
        </div>
        <div className={styles.socialMedia}>
          <a href="#">
            <img src="./images/twitter.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="./images/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="./images/instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="./images/linkedin.png" alt="Linkedin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
