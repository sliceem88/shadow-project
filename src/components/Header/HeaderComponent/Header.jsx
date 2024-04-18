"use client";
import styles from "./Header.module.scss";
import HeaderUpperblock from "./HeaderUpperblock";
import HeaderLowerblock from "./HeaderLowerblock";

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderUpperblock />
      <HeaderLowerblock />
    </div>
  );
};

export default Header;
