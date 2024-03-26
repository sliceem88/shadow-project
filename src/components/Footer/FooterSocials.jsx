import { footerSocialsList } from "./FooterSocials.config";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const FooterContacts = () => {
  return (
    <div className={styles.footer_upperblock_left_socials}>
      {footerSocialsList.map((item) => (
        <Link href={item.link} key={item.link} target="_blank">
          <Image src={item.icon} alt={item.alt} />
        </Link>
      ))}
    </div>
  );
};

export default FooterContacts;
