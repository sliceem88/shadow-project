import RegisterShadower from "@/components/RegisterShadower/RegisterShadower";
import { Button } from "@mui/material";
import Image from "next/image";
import registerShadowerImage from "@/components/RegisterShadower/img/registerShadowerImage.png";
import styles from "@/components/RegisterShadower/RegisterShadow.module.scss";
import BackArrow from "@/components/RegisterShadower/img/arrowIcon.svg";
import GreyLineRegister from "@/components/RegisterShadower/img/greyLineRegister.svg";
import Link from "next/link";
import RegisterShadowerSocials from "@/components/RegisterShadower/RegisterShadowerSocials";
import GreyLineDivider from "@/components/RegisterShadower/GreyLineDivider";

export default function RegisterShadowerPage() {
  return (
    <div className={styles.registerShadower}>
      <div>
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
              backgroundColor: "var(--blue-light-3)",
            },
          }}
        >
          <Image src={BackArrow} alt="Back arrow icon" />
          <div>Atpakaļ</div>
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
            <GreyLineDivider
              text="Vai reģistrējies ar"
              greyline={GreyLineRegister}
            />
            <RegisterShadowerSocials background="var(--white)" />
            <p className={styles.registerShadower_mainBlock_right_login}>
              Esi jau reģistrējies TryWork?
              <Link
                href="/login"
                className={styles.registerShadower_mainBlock_right_login_link}
              >
                Ienākt
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
