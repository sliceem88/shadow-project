"use client";
import { useState } from "react";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HeaderTabs = ({ tabList, tabColor, tabActiveColor, iconPlace }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      TabIndicatorProps={{
        display: "none",
      }}
      value={value}
      onChange={handleChange}
      style={{ height: "38px", display: "flex", alignItems: "center" }}
    >
      {tabList.map((item) => (
        <Tab
          value={item.value}
          key={item.name}
          label={item.name}
          icon={<ChevronRightIcon sx={{ transform: "rotate(90deg)" }} />}
          iconPosition="end"
          disableRipple
          sx={{
            textTransform: "none",
            padding: "0",
            marginRight: "24px",
            fontSize: "16px",
            lineHeight: "26px",
            letterSpacing: "0.46px",
            fontWeight: "500",
            color: tabColor,
            textUnderlineOffset: "8px",
            "&.Mui-selected": {
              color: tabActiveColor,
              fontWeight: "700",
              textDecoration: "underline #84EAFF 4px",
            },
            "&:hover": {
              color: tabActiveColor,
              fontWeight: "700",
              textDecoration: "underline #84EAFF 4px",
            },
          }}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default HeaderTabs;
