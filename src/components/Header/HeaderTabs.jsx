"use client";
import { useState } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
// import Link from "next/link";

const HeaderTabs = ({ tabList, tabColor, tabActiveColor }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      TabIndicatorProps={{ style: { backgroundColor: "#84EAFF", height: 8 } }}
      value={value}
      onChange={handleChange}
    >
      {tabList.map((item) => (
        <Tab
          value={item.value}
          key={item.name}
          label={item.name}
          // component={Link}
          // href={item.link}
          sx={{
            textTransform: "none",
            padding: "9px 16px",
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            fontWeight: "500",
            color: tabColor,
            "&.Mui-selected": {
              color: tabActiveColor,
              fontWeight: "700",
            },
          }}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default HeaderTabs;
