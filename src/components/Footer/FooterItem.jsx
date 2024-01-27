import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
// import footerStyle from "./Footer.style.scss";

function FooterItem() {
  return (
    <ListItem className="">
      <ListItemText className="footerItemText">
        <Link href="">About us</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Contacts</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Socials</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Support</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Privacy</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">FAQ</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Sitemap</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Accessibility</Link>
      </ListItemText>
      <ListItemText className="FooterItemText">
        <Link href="">Terms and conditions</Link>
      </ListItemText>
    </ListItem>
  );
}

export default FooterItem;
