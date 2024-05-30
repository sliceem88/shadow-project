import LoginPage from "@/components/LoginPage/LoginPage";
import styles from "@/components/LoginPage/LoginPage.module.scss";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div>
        <h2 className={styles.loginPage_title}>
          Ienākt <span className={styles.loginPage_title_span}>Trywork</span>
        </h2>
        <div className={styles.loginPage_mainBlock}>
          <LoginPage />
        </div>
      </div>
    </div>
  );
};

export default Login;
