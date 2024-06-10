import Image from "next/image";
import styles from "./Header.module.scss";
import PersonIcon from "../img/personVector.svg";
import SearchIcon from "../img/searchIcon.svg";
import HeaderTabs from "../HeaderTabsComponent/HeaderTabs";
import { HeaderTabsUpper } from "../HeaderTabsComponent/HeaderTabsUpper.config";

function HeaderUpperblock() {
  return (
    <div className={styles.header_upperblock}>
      <HeaderTabs
        tabList={HeaderTabsUpper}
        tabColor="var(--white)"
        tabHoverColor="var(--cyan)"
        tabActiveColor="var(--white)"
      />
      <div className={styles.header_upperblock_right}>
        <div className={styles.header_upperblock_right_inputWrapper}>
          <input
            type="text"
            className={styles.header_upperblock_right_inputWrapper_input}
          ></input>
          <button
            className={styles.header_upperblock_right_inputWrapper_inputButton}
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
  );
}

export default HeaderUpperblock;
