"use client";
import Link from "next/link";
import { footerResourcesList } from "./FooterResources.config";
import styles from "./Footer.scss";

const FooterResources = () => {
  return footerResourcesList.map((item) => (
    <div key={item.link}>
      <Link href={item.link}>{item.name}</Link>
    </div>
  ));
};

export default FooterResources;
