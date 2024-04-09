"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "./img/logo.png";
import LogoText from "./img/logoText.png";
import Person from "./img/person.png";
import HeaderTabs from "./HeaderTabs";
import { HeaderTabsLower } from "./HeaderTabsLower.config";
import { HeaderTabsUpper } from "./HeaderTabsUpper.config";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_upperblock}>
        <HeaderTabs tabList={HeaderTabsUpper} tabStyle="upperblock_tabs" />
        <div className={styles.header_upperblock_right}>
          <input
            type="text"
            className={styles.header_upperblock_right_input}
          ></input>
          <Image src={Person} />
          <div>LV</div>
        </div>
      </div>

      <div className={styles.header_lowerblock}>
        <div>
          <Image src={Logo} alt="Logo" />
          <Image src={LogoText} alt="Logo text" />
        </div>
        <HeaderTabs tabList={HeaderTabsLower} tabStyle="lowerblock_tabs" />
        <div className={styles.header_lowerblock_right}>
          <Button
            sx={{
              color: "#0088A1",
              textTransform: "none",
              fontSize: "13px",
              letterSpacing: "0.46",
              padding: "4px 10px",
              fontWeight: "500",
              lineHeight: "22px",
              border: "1px solid #0088A1",
              "&:hover": {
                border: "1px solid #0088A1",
              },
            }}
            variant="outlined"
            size="small"
            color="primary"
          >
            Ienākt
          </Button>
          <Button
            sx={{
              color: "#ffffff",
              backgroundColor: "#0088A1",
              textTransform: "none",
              fontSize: "13px",
              letterSpacing: "0.46",
              padding: "4px 10px",
              fontWeight: "500",
              lineHeight: "22px",
              "&:hover": {
                backgroundColor: "#0088A1",
              },
            }}
            variant="contained"
            size="small"
            color="primary"
          >
            Reģistrēties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
