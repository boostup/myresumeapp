import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="20vh"
    >
      <Typography variant="h1" sx={{ xs: { fontSize: "2rem" } }}>
        CV Vichy 2022
      </Typography>
    </Box>
  );
}

export default Header;
