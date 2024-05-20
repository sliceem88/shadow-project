"use client";
import styles from "./HeroBlock.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";

const HeroBlockComponent = ({
  titleData,
  buttonLeftData,
  buttonRightData,
  imageData,
}) => {
  return (
    <div className={styles.heroblock}>
      <div className={styles.heroblock_left}>
        <div className={styles.heroblock_left_texts}>
          <p className={styles.heroblock_left_texts_title}>{titleData.title}</p>
          <p className={styles.heroblock_left_texts_subtitle}>
            <span className={styles.heroblock_left_texts_subtitle_span}>
              {titleData.subtitleSpan}
            </span>
            &nbsp;{titleData.subtitle}
          </p>
        </div>
        <div>
          <Button
            href={buttonLeftData.buttonLeftLink}
            sx={{
              textTransform: "none",
              marginRight: "24px",
              width: "246px",
              height: "42px",
              padding: "8px 24px",
              backgroundColor: "var(--blue)",
              color: "white",
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
            {buttonLeftData.buttonLeftText}
          </Button>
          <Button
            href={buttonRightData.buttonRightLink}
            sx={{
              textTransform: "none",
              width: "246px",
              height: "42px",
              backgroundColor: "var(--green-blue)",
              color: "white",
              borderRadius: "40px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: "var(--green-blue-light-1)",
              },
            }}
          >
            {buttonRightData.buttonRightText}
          </Button>
        </div>
      </div>
      <div className={styles.heroblock_right}>
        <Image src={imageData.imageSrc} alt={imageData.imageAlt} />
      </div>
    </div>
  );
};

export default HeroBlockComponent;
