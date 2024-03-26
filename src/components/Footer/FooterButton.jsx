import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const FooterButton = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        sx={{ letterSpacing: 0.46 }}
      >
        Iesaki
      </Button>
    </ThemeProvider>
  );
};

export default FooterButton;
