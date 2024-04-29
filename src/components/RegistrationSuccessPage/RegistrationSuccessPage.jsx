"use client";
import style from "RegistrationSucessPage.scss"  

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


