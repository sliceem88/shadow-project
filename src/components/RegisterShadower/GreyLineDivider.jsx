"use client";
import Image from "next/image";
import styles from "./RegisterShadow.module.scss";

const GreyLineDivider = ({ text, greyline }) => {
  return (
    <div className={styles.registerShadower_mainBlock_right_greyLines}>
      <Image src={greyline} alt="Grey line" />
      <p className={styles.registerShadower_mainBlock_right_greyLines_text}>
        {text}
      </p>
      <Image src={greyline} alt="Grey line" />
    </div>
  );
};

export default GreyLineDivider;
