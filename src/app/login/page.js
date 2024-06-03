import Login from "@/components/LoginPage/Login";
import styles from "@/components/LoginPage/LoginPage.module.scss";
import RegisterShadowerSocials from "@/components/RegisterShadower/RegisterShadowerSocials";
import GreyLineDivider from "@/components/RegisterShadower/GreyLineDivider";
import GreyLineLogin from "@/components/LoginPage/img/greyLineLogin.svg";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div>
        <h2 className={styles.loginPage_title}>
          Ienākt <span className={styles.loginPage_title_span}>Trywork</span>
        </h2>
        <div className={styles.loginPage_mainBlock}>
          <Login />
          <GreyLineDivider text="Vai ienākt ar" greyline={GreyLineLogin} />
          <RegisterShadowerSocials background="var(--bg-blue)" />
          <p className={styles.loginPage_mainBlock_login}>
            Jauns lietotājs?
            <Link
              href="/registration"
              className={styles.loginPage_mainBlock_login_link}
            >
              Reģistrēties
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
