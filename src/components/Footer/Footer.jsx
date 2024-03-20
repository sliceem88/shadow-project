"use client";
import FooterUs from "./FooterUs";
import FooterUsers from "./FooterUsers";
import FooterResources from "./FooterResources";
import FooterSocials from "./FooterSocials";
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
          <div className={styles.footer_upperblock_left_socials}>
            <FooterSocials />
          </div>
        </div>
        <div className={styles.footer_upperblock_right}>
          <div className={styles.footer_upperblock_right_first3blocks}>
            <h4 className={styles.footer_title}>Par TryWork</h4>
            <FooterUs />
          </div>
          <div className={styles.footer_upperblock_right_first3blocks}>
            <h4 className={styles.footer_title}>Lietotājiem</h4>
            <FooterUsers />
          </div>
          <div className={styles.footer_upperblock_right_first3blocks}>
            <h4 className={styles.footer_title}>Resursi</h4>
            <FooterResources />
          </div>
          <div className={styles.footer_upperblock_right_lastblock}>
            <h4 className={styles.footer_title}>Ieteikumi</h4>
            <p className={styles.footer_upperblock_right_lastblock_text}>
              Dalies ar ieteikumiem par uzlabojumiem mājaslapā un atbildi uz
              jautājumiem vtmldz.
            </p>
            <Button variant="outlined" color="primary" size="small">
              Iesaki
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.footer_lowerblock}>
        <p className={styles.footer_lowerblock_left}>
          2024 © Autortiesības TryWork. Visas tiesības aizsargātas.
        </p>
        <div className={styles.footer_lowerblock_right}>
          <p>Sīkdatņu politika</p>
          <p>Privātuma politika</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
