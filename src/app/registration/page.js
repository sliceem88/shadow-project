import Registration from "@/components/Registration/Registration";
import Image from "next/image";
import Link from "next/link";
import BackArrow from "@/components/Registration/img/arrow.svg";
import styles from "@/components/Registration/Registration.module.scss";
import { Button } from "@mui/material";

export default function RegistrationPage() {
  return (
    <div className={styles.registration_body}>
      <Button
        href="/"
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
        <Image src={BackArrow} alt="Back arrow icon" />
        <div>Atpakaļ</div>
      </Button>

      <div className={styles.registration_body_content}>
        <h1 className={styles.registration_body_content_title}>
          Pievienojies kā Ēnotājs vai kā Ēnu devējs
        </h1>
        <Registration />
        <p className={styles.registration_body_content_login}>
          Esi jau reģistrējies TryWork?
          <Link
            href="/login"
            className={styles.registration_body_content_login_link}
          >
            Ienākt
          </Link>
        </p>
      </div>
    </div>
  );
}
