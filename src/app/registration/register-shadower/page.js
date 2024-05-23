import RegisterShadower from "@/components/RegisterShadower/RegisterShadower";
import { Button } from "@mui/material";
import Image from "next/image";
import registerShadowerImage from "@/components/RegisterShadower/img/registerShadowerImage.png";
import styles from "@/components/RegisterShadower/RegisterShadow.module.scss";

export default function RegisterShadowerPage() {
  return (
    <div className={styles.registerShadower}>
      <Button
        href="/registration"
        sx={{
          textTransform: "none",
          display: "flex",
          gap: "8px",
          padding: "4px",
          width: "93px",
          height: "30px",
          color: "#347DCA",
          borderRadius: "100px",
          letterSpacing: "0.46px",
          lineHeight: "22px",
          fontWeight: "500",
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#d6e5f4",
          },
        }}
      >
        Atpakaļ
      </Button>
      <div className={styles.registerShadower_mainBlock}>
        <Image
          src={registerShadowerImage}
          alt="Three people working together in an office"
        />
        <div className={styles.registerShadower_mainBlock_right}>
          <h2 className={styles.registerShadower_mainBlock_right_title}>
            Reģistrējies kā <br />
            <span
              className={styles.registerShadower_mainBlock_right_title_span}
            >
              Ēnotājs
            </span>
          </h2>
          <RegisterShadower />
        </div>
      </div>
    </div>
  );
}
