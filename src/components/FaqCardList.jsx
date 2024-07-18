import React from "react";
import FaqCard from "./FaqCard";
import faqData from "../pages/faqData";
import styles from "../styles/CardList.module.css";

const CardList = () => {
  return (
    <div className={styles.cardList}>
      <div className={styles.titleList}>
        <div className={styles.title}>All</div>
        <div className={styles.title}>Seafarer</div>
        <div className={styles.title}>Company</div>
        <div className={styles.title}>Cadet</div>
      </div>

      {faqData.map((item, index) => (
        <FaqCard
          key={index}
          icon={item.icon}
          title={item.title}
          question={item.question}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CardList;
