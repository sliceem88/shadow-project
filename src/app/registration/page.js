import Registration from "@/components/Registration/Registration";
import Image from "next/image";
import Link from "next/link";
import BackArrow from "@/components/Registration/img/back_arrow.png";
import styles from "@/components/Registration/Registration.module.scss";

export default function RegistrationPage() {
  return (
    <>
      <div className={styles.reg_body}>
        <Image src={BackArrow} alt="Back arrow icon" />
        <Link href="/" className={styles.back}>
          Atpakaļ
        </Link>
        <div className={styles.reg_content}>
          <h1 className={styles.title}>
            Pievienojies kā ēnotājs vai kā profesionālis vai uzņēmums?
          </h1>
          <h2 className={styles.subtitle}>
            Autem sunt ratione asperiores odit nobis consequuntur quo sequi.
          </h2>
          <Registration />
          <p className={styles.login}>
            Esi jau reģistrējies TryWork? <Link href="">Ienākt</Link>
          </p>
        </div>
      </div>
    </>
  );
}
