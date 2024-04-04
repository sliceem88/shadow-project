"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";

const FooterItemList = ({ items, title }) => {
  return (
    <div className={styles.footer_upperblock_right_first3blocks}>
      <h4 className={styles.footer_title}>{title}</h4>
      {items.map((item) => (
        <div key={item.link}>
          <Link className={styles.footer_link} href={item.link}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterItemList;
