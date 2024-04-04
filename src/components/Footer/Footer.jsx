"use client";
import FooterItemList from "./FooterItemList";
import FooterSocials from "./FooterSocials";
import FooterLowerblock from "./FooterLowerblock";
import { footerResourcesList } from "./FooterResources.config";
import { footerUsList } from "./FooterUs.config";
import { footerUsersList } from "./FooterUsers.config";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "./img/logo-place.png";
import Envelope from "./img/envelope.png";
import Phone from "./img/phone.png";
import { Button } from "@mui/material";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_upperblock}>
        <div className={styles.footer_upperblock_left}>
          <Image src={Logo} alt="Logo" />
          <div className={styles.footer_upperblock_left_email}>
            <Image src={Envelope} alt="Envelope icon" />
            <p>atbalsts@trywork.lv</p>
          </div>
          <div className={styles.footer_upperblock_left_phone}>
            <Image src={Phone} alt="Phone icon" />
            <p>+371 12345673</p>
          </div>
          <FooterSocials />
        </div>
        <div className={styles.footer_upperblock_right}>
          <FooterItemList items={footerUsList} title="Par Trywork" />
          <FooterItemList items={footerUsersList} title="Lietotājiem" />
          <FooterItemList items={footerResourcesList} title="Resursi" />
          <div className={styles.footer_upperblock_right_lastblock}>
            <h4 className={styles.footer_title}>Ieteikumi</h4>
            <p className={styles.footer_upperblock_right_lastblock_text}>
              Lūdzu, dalies ar ieteikumiem par uzlabojumiem mājaslapā un atbildi
              uz jautājumiem
            </p>
            <Button
              // className={styles.footer_upperblock_right_lastblock_button}
              sx={{
                color: "#ffffff",
                textTransform: "none",
                fontSize: "14px",
                letterSpacing: "0.46",
                padding: "4px 10px",
                lineHeight: "22px",
                border: "1px solid #ffffff",
                "&:hover": {
                  border: "1px solid #ffffff",
                },
              }}
              variant="outlined"
              size="small"
              color="primary"
            >
              Iesaki
            </Button>
          </div>
        </div>
      </div>
      <FooterLowerblock />
    </div>
  );
}

export default Footer;
