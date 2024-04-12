"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "./img/logo.png";
import LogoText from "./img/logoText.png";
import Person from "./img/personVector.svg";
import Search from "./img/search.png";
import HeaderTabs from "./HeaderTabs";
import { HeaderTabsLower } from "./HeaderTabsLower.config";
import { HeaderTabsUpper } from "./HeaderTabsUpper.config";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_upperblock}>
        <HeaderTabs
          tabList={HeaderTabsUpper}
          tabColor="#FFFFFF"
          tabActiveColor="#FFFFFF"
        />
        <div className={styles.header_upperblock_right}>
          <input
            type="text"
            className={styles.header_upperblock_right_input}
          ></input>
          <Image
            src={Person}
            className={styles.header_upperblock_right_person}
          />
          <div className={styles.header_upperblock_right_lv}>LV</div>
        </div>
      </div>
      <div className={styles.header_lowerblock}>
        <div>
          <Image src={Logo} alt="Logo" />
          <Image src={LogoText} alt="Logo text" />
        </div>
        <HeaderTabs
          tabList={HeaderTabsLower}
          tabColor="#212427"
          tabActiveColor="#0088A1"
        />
        <div className={styles.header_lowerblock_right}>
          <Button
            sx={{
              color: "#0088A1",
              textTransform: "none",
              fontSize: "13px",
              letterSpacing: "0.46",
              padding: "4px 16px",
              fontWeight: "500",
              lineHeight: "22px",
              border: "1.6px solid #0088A1",
              borderRadius: "40px",
              width: "113px",
              height: "30px",
              "&:hover": {
                border: "1.6px solid #0088A1",
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
              padding: "4px 16px",
              fontWeight: "500",
              lineHeight: "22px",
              borderRadius: "40px",
              width: "113px",
              height: "30px",
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
