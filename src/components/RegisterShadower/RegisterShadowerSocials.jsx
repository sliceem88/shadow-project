import { Button } from "@mui/material";
import { RegisterShadowerSocialsButtons } from "./RegisterShadowerSocialsButtons.config";
import Image from "next/image";
import styles from "./RegisterShadow.module.scss";

const RegisterShadowerSocials = () => {
  return (
    <div className={styles.registerShadower_mainBlock_right_socials}>
      {RegisterShadowerSocialsButtons.map((item) => (
        <Button
          key={item.text}
          sx={{
            textTransform: "none",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.15px",
            padding: "8px",
            color: "var(--black-ish)",
            backgroundColor: "var(--white)",
            "&:hover": {
              backgroundColor: "var(--white)",
            },
          }}
        >
          <Image src={item.icon} />
          <p className={styles.registerShadower_mainBlock_right_socials_text}>
            {item.text}
          </p>
        </Button>
      ))}
    </div>
  );
};

export default RegisterShadowerSocials;
