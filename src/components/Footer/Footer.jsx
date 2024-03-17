"use client";
import FooterUs from "./FooterUs";
import FooterUsers from "./FooterUsers";
import FooterResources from "./FooterResources";
import FooterSocials from "./FooterSocials";
import styles from "./Footer.scss";
import Image from "next/image";
import Logo from "./img/logo-place.png";
import Envelope from "./img/envelope.png";
import Phone from "./img/phone.png";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <Image src={Logo} alt="Logo" />
          <p>
            <Image src={Envelope} alt="Envelope icon" />
            atbalsts@trywork.lv
          </p>
          <p>
            <Image src={Phone} alt="Phone icon" />
            +371 12345673
          </p>
          <div>
            <FooterSocials />
          </div>
        </div>
        <div>
          <div>
            <h4>Par TryWork</h4>
            <FooterUs />
          </div>
          <div>
            <h4>Lietotājiem</h4>
            <FooterUsers />
          </div>
          <div>
            <h4>Resursi</h4>
            <FooterResources />
          </div>
          <div>
            <h4>Ieteikumi</h4>
            <p>
              Dalies ar ieteikumiem par uzlabojumiem mājaslapā un atbildi uz
              jautājumiem vtmldz.
            </p>
            <button>Iesaki</button>
          </div>
        </div>
      </div>
      <div>
        <p>2024 © Autortiesības TryWork. Visas tiesības aizsargātas.</p>
        <div>
          <p>Sīkdatņu politika</p>
          <p>Privātuma politika</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
