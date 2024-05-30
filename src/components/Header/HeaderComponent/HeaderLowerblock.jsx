import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../img/logoImage.png";
import LogoText from "../img/logoText.png";
import HeaderTabs from "../HeaderTabsComponent/HeaderTabs";
import { HeaderTabsLower } from "../HeaderTabsComponent/HeaderTabsLower.config";
import { Button } from "@mui/material";
import Link from "next/link";

function HeaderLowerblock() {
  return (
    <div className={styles.header_lowerblock}>
      <Link href="/">
        <div className={styles.header_lowerblock_left}>
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <div className={styles.header_lowerblock_left_logoTextPlace}>
            <Image src={LogoText} alt="Logo text" />
          </div>
        </div>
      </Link>
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
          component={Link}
          href="/login"
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
  );
}

export default HeaderLowerblock;
