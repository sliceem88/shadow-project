import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  return (
    <form>
      <TextField
        required
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
        required
        fullWidth
        label="Parole"
        variant="outlined"
        size="medium"
        type="password"
        sx={{
          marginBottom: "16px",
          backgroundColor: "var(--white)",
        }}
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
          backgroundColor: "var(--green-blue)",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: "0.46px",
          color: "var(--white)",
          "&:hover": {
            backgroundColor: "var(--green-blue-light-1)",
          },
        }}
      >
        Ienākt
      </Button>
    </form>
  );
};

export default Login;
