import { footerSocialsList } from "./FooterSocials.config";
import Link from "next/link";
import Image from "next/image";

const FooterContacts = () => {
  return footerSocialsList.map((item) => (
    <Link href={item.link} target="_blank">
      <Image src={item.icon} alt={item.alt} />
    </Link>
  ));
};

export default FooterContacts;
