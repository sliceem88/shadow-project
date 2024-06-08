import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "next/link";
import styles from "./RegisterShadow.module.scss";
import { Button } from "@mui/material";

const RegisterShadower = () => {
  const checkboxLabel = (
    <p>
      Es piekrītu{" "}
      <Link
        href="/rules"
        target="_blank"
        className={styles.registerShadower_mainBlock_right_checkboxlink}
      >
        lietošanas noteikumiem
      </Link>{" "}
      un{" "}
      <Link
        href="/privacy"
        target="_blank"
        className={styles.registerShadower_mainBlock_right_checkboxlink}
      >
        privātuma noteikumiem
      </Link>
    </p>
  );

  return (
    <form className={styles.registerShadower_mainBlock_right_form}>
      <TextField
        fullWidth
        required
        label="Vārds, uzvārds"
        variant="outlined"
        size="medium"
        sx={{
          marginBottom: "24px",
        }}
      />
      <TextField
        fullWidth
        required
        label="E-pasta adrese"
        variant="outlined"
        size="medium"
        type="email"
        sx={{
          marginBottom: "24px",
        }}
      />
      <TextField
        fullWidth
        required
        label="Parole"
        variant="outlined"
        size="medium"
        type="password"
        helperText="8 un vairāk rakstu zīmes"
        inputProps={{ minLength: 8 }}
        sx={{
          marginBottom: "16px",
        }}
      />
      <FormControlLabel control={<Checkbox />} label={checkboxLabel} />
      <Button
        type="submit"
        href="/welcome"
        sx={{
          textTransform: "none",
          width: "340px",
          height: "42px",
          borderRadius: "40px",
          padding: "8px 24px",
          marginBottom: "40px",
          marginTop: "32px",
          backgroundColor: "var(--blue)",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: "0.46px",
          color: "var(--white)",
          "&:hover": {
            backgroundColor: "var(--blue-light-1)",
          },
        }}
      >
        Reģistrējies
      </Button>
    </form>
  );
};

export default RegisterShadower;
