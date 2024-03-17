"use client";
import Link from "next/link";
import { footerUsersList } from "./FooterUsers.config";
import styles from "./Footer.scss";

const FooterUsers = () => {
  return footerUsersList.map((item) => (
    <div key={item.link}>
      <Link href={item.link}>{item.name}</Link>
    </div>
  ));
};

export default FooterUsers;
