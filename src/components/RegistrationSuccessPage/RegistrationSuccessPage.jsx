"use client";
import styles from "./LoginSucccessPage.scss";
import Envelope from "./img/envelope.png";
import Logo from "./img/logo-place.png";
import Footer from "../Footer/Footer";

function RegistrationSucessPage() {
  return (
  <div className="RegistrationSuccesPage">
      <h1>Lai turpinātu, lūdzu, apstipriniet savu e-pasta adresi</h1>
      <p>Reģistrācijas saite tiks nosūtīta uz Jūsu e-pasta adresi </p>
        <div>
        input type="email"; <var>vards.uzvards@gmail.com</var>
        </div>
      <p1>Lūdzu, pārbaudiet savu e-pastu, un, nospiežot saiti, tiks apstiprināts Jūsu e-pasts</p1>
      <Link href="/" className={styles.back}>
          Nosūtīt e-pastu vēlreiz
      </Link>    
</div>
  );
}

export default RegistrationSucessPage;