// import BackArrow from "@/components/Registration/img/arrow.svg";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import styles from "./RegisterShadow.module.scss";

const RegisterShadower = () => {
  const checkboxLabel = (
    <p>
      Es piekrītu{" "}
      <Link href="/rules" target="_blank">
        lietošanas noteikumiem
      </Link>{" "}
      un{" "}
      <Link href="/privacy" target="_blank">
        privātuma noteikumiem
      </Link>
    </p>
  );

  return (
    <form className={styles.registerShadower_mainBlock_right_form}>
      <TextField
        fullWidth
        label="Vārds, uzvārds"
        variant="outlined"
        size="medium"
        sx={{
          marginBottom: "24px",
        }}
      />
      <TextField
        fullWidth
        label="E-pasta adrese"
        variant="outlined"
        size="medium"
        sx={{
          marginBottom: "24px",
        }}
      />
      <TextField
        fullWidth
        label="Parole"
        variant="outlined"
        size="medium"
        type="password"
        sx={{
          marginBottom: "16px",
        }}
      />
      <FormControlLabel control={<Checkbox />} label={checkboxLabel} />
    </form>
  );
};

export default RegisterShadower;
