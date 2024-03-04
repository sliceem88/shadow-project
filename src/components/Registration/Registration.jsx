"use client";
import { RegistrationCards } from "./Registration.config";
import styles from "./Registration.module.sass";
import Link from "next/link";

const Registration = () => {
  return (
    <>
      <div className={styles.reg_header} key="reg-header">
        Logo
      </div>
      <div className={styles.reg_body} key="reg-body">
        <span class="material-symbols-outlined">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          arrow_back_ios
        </span>
        <Link href="/">Atpakaļ</Link>
        <div className={styles.reg_content}>
          <h1>Pievienojies kā ēnotājs vai kā profesionālis vai uzņēmums?</h1>
          <h3>
            Autem sunt ratione asperiores odit nobis consequuntur quo sequi.
          </h3>
          <div className={styles.reg_cards} key="reg-cards">
            {RegistrationCards.map((item) => (
              <div className={styles.card} key={item.link}>
                <div>{item.icon}</div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <button href={item.link}>Reģistrēties</button>
              </div>
            ))}
          </div>
          <p>
            Esi jau reģistrējies TryWork? <a>Ienākt</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
