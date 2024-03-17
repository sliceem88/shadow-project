"use client";
import Link from "next/link";
import { footerUsList } from "./FooterUs.config";
import styles from "./Footer.scss";

const FooterUs = () => {
  return footerUsList.map((item) => (
    <div key={item.link}>
      <Link href={item.link}>{item.name}</Link>
    </div>
  ));
};

export default FooterUs;
