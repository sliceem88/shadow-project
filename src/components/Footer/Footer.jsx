"use client";
import { MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import { footerListItems } from "./Footer.config";

function Footer() {
  return (
    <MenuList className="Footer">
      {footerListItems.map((item) => (
        <MenuItem key={item.link} className="Footer-Item">
          <Link href={item.link}>{item.name}</Link>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default Footer;
