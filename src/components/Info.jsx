import React from "react";
import styles from "../styles/Home.module.css";

const Info = () => {
  return (
    <div>
      <div className={styles.info}>
        <img src="./images/frame.png" />
        <h1>FAQ</h1>
        <p>
          Welcome to our FAQ page! Here, you will find answers to the most
          commonly asked questions about our services, products, and policies.
          If you need further assistance, please feel free to contact our
          support team.
        </p>
      </div>
    </div>
  );
};

export default Info;
