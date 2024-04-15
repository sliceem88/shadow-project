"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "./img/logoImage.svg";
import LogoText from "./img/logoText.png";
import PersonIcon from "./img/personVector.svg";
import SearchIcon from "./img/searchIcon.svg";
import HeaderTabs from "./HeaderTabs";
import { HeaderTabsLower } from "./HeaderTabsLower.config";
import { HeaderTabsUpper } from "./HeaderTabsUpper.config";
import { Button } from "@mui/material";
import Link from "next/link";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["500", "700"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_upperblock}>
        <HeaderTabs
          tabList={HeaderTabsUpper}
          tabColor="#FFFFFF"
          tabHoverColor="#84EAFF"
          tabActiveColor="#FFFFFF"
        />
        <div className={styles.header_upperblock_right}>
          <div className={styles.header_upperblock_right_inputWrapper}>
            <input
              type="text"
              className={styles.header_upperblock_right_inputWrapper_input}
            ></input>
            <button
              className={
                styles.header_upperblock_right_inputWrapper_inputButton
              }
            >
              <Image src={SearchIcon} alt="Search icon" />
            </button>
          </div>
          <Image
            src={PersonIcon}
            alt="Person icon"
            className={styles.header_upperblock_right_person}
          />
          <div className={styles.header_upperblock_right_lv}>LV</div>
        </div>
      </div>
      <div className={styles.header_lowerblock}>
        <div className={styles.header_lowerblock_left}>
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className={styles.header_lowerblock_left_logoTextPlace}>
            {/* <Image src={LogoText} alt="Logo text" /> */}
            <div
              className={styles.header_lowerblock_left_logoTextPlace_firstWord}
            >
              Try
            </div>
            <div
              className={styles.header_lowerblock_left_logoTextPlace_secondWord}
            >
              Work
            </div>
          </div>
        </div>
        <HeaderTabs
          tabList={HeaderTabsLower}
          tabColor="#212427"
          tabHoverColor="#339FB3"
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
            component={Link}
            href="/registration"
          >
            Reģistrēties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
