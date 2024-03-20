"use client";
import Link from "next/link";
import { footerUsersList } from "./FooterUsers.config";
import styles from "./Footer.module.scss";

const FooterUsers = () => {
  return footerUsersList.map((item) => (
    <div key={item.link}>
      <Link className={styles.footer_link} href={item.link}>
        {item.name}
      </Link>
    </div>
  ));
};

export default FooterUsers;
