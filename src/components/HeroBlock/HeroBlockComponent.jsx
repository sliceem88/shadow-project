"use client";
import styles from "./HeroBlock.module.scss";
import { Button } from "@mui/material";
import Image from "next/image";

const HeroBlockComponent = ({
  title,
  subtitle_span,
  subtitle,
  button_left_text,
  button_left_link,
  button_right_text,
  button_right_link,
  image_src,
  image_alt,
}) => {
  return (
    <div className={styles.heroblock}>
      <div className={styles.heroblock_left}>
        <div className={styles.heroblock_left_texts}>
          <p className={styles.heroblock_left_texts_title}>{title}</p>
          <p className={styles.heroblock_left_texts_subtitle}>
            <span className={styles.heroblock_left_texts_subtitle_span}>
              {subtitle_span}
            </span>
            &nbsp;{subtitle}
          </p>
        </div>
        <div>
          <Button
            href={button_left_link}
            sx={{
              textTransform: "none",
              marginRight: "24px",
              width: "246px",
              height: "42px",
              padding: "8px 24px",
              backgroundColor: "#347DCA",
              color: "white",
              borderRadius: "40px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: "#5C97D4",
              },
            }}
          >
            {button_left_text}
          </Button>
          <Button
            href={button_right_link}
            sx={{
              textTransform: "none",
              width: "246px",
              height: "42px",
              backgroundColor: "#0088A1",
              color: "white",
              borderRadius: "40px",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0.46px",
              "&:hover": {
                backgroundColor: "#339FB3",
              },
            }}
          >
            {button_right_text}
          </Button>
        </div>
      </div>
      <div className={styles.heroblock_right}>
        <Image src={image_src} alt={image_alt} />
      </div>
    </div>
  );
};

export default HeroBlockComponent;
