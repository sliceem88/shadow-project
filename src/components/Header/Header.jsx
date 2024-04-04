"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "./img/logo.png";
import LogoText from "./img/logoText.png";
import HeaderTabs from "./HeaderTabs";
import { HeaderTabsLower } from "./HeaderTabsLower.config";
import { HeaderTabsUpper } from "./HeaderTabsUpper.config";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_upperblock}>
        <HeaderTabs tabList={HeaderTabsUpper} tabStyle="upperblock_tabs" />
        <div>
          <input type="text"></input>
        </div>
      </div>

      <div className={styles.header_lowerblock}>
        <div>
          <Image src={Logo} alt="Logo" />
          <Image src={LogoText} alt="Logo text" />
        </div>
        <HeaderTabs tabList={HeaderTabsLower} tabStyle="lowerblock_tabs" />
        <div>
          <Button>Ienākt</Button>
          <Button>Reģistrēties</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
