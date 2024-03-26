import Link from "next/link";
import styles from "./Footer.module.scss";

const FooterLowerblock = () => {
  return (
    <div className={styles.footer_lowerblock}>
      <p className={styles.footer_lowerblock_left}>
        2024 © Autortiesības TryWork. Visas tiesības aizsargātas.
      </p>
      <div className={styles.footer_lowerblock_right}>
        <Link className={styles.footer_link} href="/cookies">
          Sīkdatņu politika
        </Link>
        <Link className={styles.footer_link} href="/privacy">
          Privātuma politika
        </Link>
      </div>
    </div>
  );
};

export default FooterLowerblock;
