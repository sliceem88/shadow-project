"use client";
import Link from "next/link";
import { footerResourcesList } from "./FooterResources.config";
import styles from "./Footer.module.scss";

const FooterResources = () => {
  return footerResourcesList.map((item) => (
    <div key={item.link}>
      <Link className={styles.footer_link} href={item.link}>
        {item.name}
      </Link>
    </div>
  ));
};

export default FooterResources;
