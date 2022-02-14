import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    toolbar: { xs: 48, sm: 48, md: 56, lg: 64, xl: 64 },
  },
});

const AppThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppThemeProvider;
