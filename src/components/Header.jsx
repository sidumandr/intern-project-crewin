import React from "react";
import styles from "../styles/Home.module.css";

export const Header = ({ onLogin }) => {
  return (
    <div className={styles.header}>
      <img src="./images/layer2.png" alt="crewin" />
      <div className={styles.headerRight}>
        <div className={styles.headerRightLinks}>
          <a href="#">Homepage</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.flag}>
          <img src="../images/usa.png" alt="" />
        </div>
        <div className={styles.separator}></div>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};
export default Header;
