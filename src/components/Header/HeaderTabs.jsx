"use client";
import { useState } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import styles from "./Header.module.scss";
import Link from "next/link";

const HeaderTabs = ({ tabList, tabStyle }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange}>
      {tabList.map((item) => (
        <Tab
          value={item.value}
          className={styles.header_ + tabStyle}
          key={item.name}
          label={item.name}
          // component={Link}
          // href={item.link}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default HeaderTabs;
