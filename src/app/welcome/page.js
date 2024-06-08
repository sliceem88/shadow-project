import WelcomeBlock from "@/components/Welcome/WelcomeBlock";
import styles from "@/components/Welcome/Welcome.module.scss";

const WelcomePage = () => {
  return (
    <div className={styles.welcomeContainer}>
      <WelcomeBlock />
    </div>
  );
};

export default WelcomePage;
