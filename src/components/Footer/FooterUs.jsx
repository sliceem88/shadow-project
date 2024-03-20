"use client";
import Link from "next/link";
import { footerUsList } from "./FooterUs.config";
import styles from "./Footer.module.scss";

const FooterUs = () => {
  return footerUsList.map((item) => (
    <div key={item.link}>
      <Link className={styles.footer_link} href={item.link}>
        {item.name}
      </Link>
    </div>
  ));
};

export default FooterUs;
