import styles from "./LoginPage.module.scss";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";

const LoginPage = () => {
  return (
    <form>
      <TextField
        fullWidth
        label="E-pasta adrese"
        variant="outlined"
        size="medium"
        type="email"
        sx={{
          marginBottom: "24px",
          backgroundColor: "var(--white)",
        }}
      />
      <TextField
        fullWidth
        label="Parole"
        variant="outlined"
        size="medium"
        type="password"
        helperText="8 un vairāk rakstu zīmes"
        inputProps={{ minLength: 8 }}
        sx={{
          marginBottom: "16px",
          backgroundColor: "var(--white)",
        }}
        FormHelperTextProps={{ backgroundColor: "var(--bg-blue)" }}
      />
      <FormControlLabel control={<Checkbox />} label="Atcerēties mani" />
      <Button
        type="submit"
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
        Ienākt
      </Button>
    </form>
  );
};

export default LoginPage;
