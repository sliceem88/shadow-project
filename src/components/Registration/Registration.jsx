"use client";
import { RegistrationCards } from "./Registration.config";
import styles from "./Registration.module.sass";
import Link from "next/link";

const Registration = () => {
  return (
    <>
      <div className={styles.reg_header} key="reg-header"></div>
      <div className={styles.reg_body} key="reg-body">
        <span className="material-symbols-outlined">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          arrow_back_ios
        </span>
        <Link href="/">Atpakaļ</Link>
        <div className={styles.reg_content}>
          <h1 className={styles.title}>
            Pievienojies kā ēnotājs vai kā profesionālis vai uzņēmums?
          </h1>
          <h2 className={styles.subtitle}>
            Autem sunt ratione asperiores odit nobis consequuntur quo sequi.
          </h2>
          <div className={styles.reg_cards} key="reg-cards">
            {RegistrationCards.map((item) => (
              <div className={styles.card} key={item.link}>
                <span className="material-symbols-outlined">
                  <link rel="stylesheet" href={item.iconLink} />
                  {item.icon}
                </span>
                <h3 className={styles.card_title}>{item.name}</h3>
                <p className={styles.card_text}>{item.text}</p>
                <button className={styles.button} href={item.link}>
                  Reģistrēties
                </button>
              </div>
            ))}
          </div>
          <p className={styles.login}>
            Esi jau reģistrējies TryWork? <Link href="">Ienākt</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
