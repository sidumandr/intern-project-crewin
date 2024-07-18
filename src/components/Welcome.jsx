import React from "react";
import styles from "../styles/Welcome.module.css";

const Welcome = ({ onLogin }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img src="./images/Frame 1.png" alt="" />
        <h1>WELCOME to creWin Maritime Platform!!!</h1>
        <h3>Oğuzhan Korkmaz</h3>
        <p>
          We are very happy that you are with us on this long journey. Thanks !
        </p>
        <br />
        <p>Your Unique Referance Code:</p>
        <strong>71789301</strong> <br />
        <button onClick={onLogin}> Get Website</button>
        <div className={styles.download}>
          <h3>Download Crewin Apps</h3>
          <div className={styles.buttons}>
            <button>
              <img src="./images/appstore.png" />
              App Store
            </button>
            <button>
              <img src="./images/googleplay.png" alt="" />
              Google Play
            </button>
          </div>
        </div>
        <div className={styles.footer}>
          <img src="./images/Frame 2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
