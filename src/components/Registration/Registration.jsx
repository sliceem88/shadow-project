"use client";
import { RegistrationCards } from "./Registration.config";
import styles from "./Registration.module.scss";
import Image from "next/image";

const Registration = () => {
  return (
    <div className={styles.reg_cards}>
      {RegistrationCards.map((item) => (
        <div className={styles.card} key={item.link}>
          <Image src={item.icon} alt={item.alt} />
          <h3 className={styles.card_title}>{item.name}</h3>
          <p className={styles.card_text}>{item.text}</p>
          <button className={styles.button} href={item.link}>
            Reģistrēties
          </button>
        </div>
      ))}
    </div>
  );
};

export default Registration;
