import Image from "next/image";
import WavingHand from "@/components/Welcome/img/wavingHand.svg";
import styles from "@/components/Welcome/Welcome.module.scss";
import { Button } from "@mui/material";

const WelcomePage = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeContainer_welcomeBlock_mainBlock}>
        <Image src={WavingHand} alt="Waving hand icon" />
        <h1 className={styles.welcomeContainer_welcomeBlock_mainBlock_title}>
          Sveika, Alise!
        </h1>
        <h2 className={styles.welcomeContainer_welcomeBlock_mainBlock_subtitle}>
          Aizpildi savu profilu un <br />
          atrodi vislabāko saderību ar Ēnu devējiem!
        </h2>
        <h3
          className={styles.welcomeContainer_welcomeBlock_mainBlock_stepsTitle}
        >
          Tikai{" "}
          <span
            className={
              styles.welcomeContainer_welcomeBlock_mainBlock_stepsTitle_span
            }
          >
            3
          </span>{" "}
          vienkārši soļi līdz Tavam sapņu darbam!
        </h3>
        <Button
          sx={{
            textTransform: "none",
            width: "159px",
            height: "42px",
            color: "var(--white)",
            backgroundColor: "var(--blue)",
            borderRadius: "40px",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            "&:hover": {
              backgroundColor: "var(--blue-light-1)",
            },
          }}
        >
          Aizpildi profilu
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
