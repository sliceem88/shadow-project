"use client";
import { RegistrationCards } from "./Registration.config";
import styles from "./Registration.module.scss";
import Image from "next/image";
import { Button } from "@mui/material";

const Registration = () => {
  return (
    <div className={styles.registration_body_content_cards}>
      {RegistrationCards.map((item) => (
        <div
          className={styles.registration_body_content_cards_card}
          key={item.link}
        >
          <Image src={item.icon} alt={item.alt} />
          <h3
            className={styles.registration_body_content_cards_card_title}
            style={{ color: item.color }}
          >
            {item.name}
          </h3>
          <p className={styles.registration_body_content_cards_card_text}>
            {item.text}
          </p>
          <Button
            href={item.link}
            sx={{
              textTransform: "none",
              backgroundColor: item.color,
              color: "#ffffff",
              height: "42px",
              width: "138px",
              padding: "8px 24px",
              borderRadius: "40px",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: item.hoverColor,
              },
            }}
          >
            Reģistrējies
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Registration;
