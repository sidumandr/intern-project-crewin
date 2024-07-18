import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import CadetIcon from "../../public/icons/CadetIcon";
import CompanyIcon from "../../public/icons/CompanyIcon";
import UserIcon from "../../public/icons/UserIcon";
import ArrowUp from "../../public/icons/ArrowUp";
import ArrowDown from "../../public/icons/ArrowDown";

const FaqCard = ({ icon, title, question, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "cadet":
        return <CadetIcon />;
      case "company":
        return <CompanyIcon />;
      case "user":
        return <UserIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.icon}>{getIconComponent(icon)}</div>
        <div className={styles.title}>
          <h2>{title}</h2>
          <p>{question}</p>
        </div>
        <div className={styles.arrow}>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </div>
      <div
        className={`${styles.cardBody} ${
          isOpen ? styles.visible : styles.hidden
        }`}
      >
        {description}
      </div>
    </div>
  );
};

export default FaqCard;
