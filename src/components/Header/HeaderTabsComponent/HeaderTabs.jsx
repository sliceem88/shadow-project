"use client";
import { useState } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { HeaderTabsLower } from "./HeaderTabsLower.config";

const HeaderTabs = ({ tabList, tabColor, tabHoverColor, tabActiveColor }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isThereAnIcon = () => {
    if (tabList === HeaderTabsLower)
      return <ChevronRightIcon sx={{ transform: "rotate(90deg)" }} />;
    else return "";
  };

  return (
    <Tabs
      value={value}
      aria-label="Navigation"
      onChange={handleChange}
      sx={{
        "& .MuiTabs-indicator": { display: "none" },
      }}
      style={{ height: "38px", display: "flex", alignItems: "center" }}
    >
      {tabList.map((item) => (
        <Tab
          value={item.value}
          key={item.name}
          label={item.name}
          icon={isThereAnIcon()}
          iconPosition="end"
          disableRipple
          sx={{
            textTransform: "none",
            padding: "0",
            marginRight: "24px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            fontWeight: "500",
            fontSize: "16px",
            color: tabColor,
            textUnderlineOffset: "8px",
            "&.Mui-selected": {
              color: tabActiveColor,
              textDecoration: "underline #84EAFF 4px",
            },
            "&:hover": {
              color: tabHoverColor,
              textDecoration: "underline #84EAFF 4px",
            },
          }}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default HeaderTabs;
