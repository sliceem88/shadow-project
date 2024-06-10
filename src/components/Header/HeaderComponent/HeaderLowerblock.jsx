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
          <div>
            <Image src={LogoText} alt="Logo text" />
          </div>
        </div>
      </Link>
      <HeaderTabs
        tabList={HeaderTabsLower}
        tabColor="var(--black-ish)"
        tabHoverColor="var(--green-blue-light-1)"
        tabActiveColor="var(--green-blue)"
      />
      <div className={styles.header_lowerblock_right}>
        <Button
          sx={{
            color: "var(--green-blue)",
            textTransform: "none",
            fontSize: "13px",
            letterSpacing: "0.46",
            padding: "4px 16px",
            fontWeight: "500",
            lineHeight: "22px",
            border: "1.6px solid var(--green-blue)",
            borderRadius: "40px",
            width: "113px",
            height: "30px",
            "&:hover": {
              border: "1.6px solid var(--green-blue)",
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
            color: "var(--white)",
            backgroundColor: "var(--green-blue)",
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
              backgroundColor: "var(--green-blue)",
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
