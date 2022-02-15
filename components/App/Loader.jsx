import { Box, Typography } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant={"h1"}
        sx={{
          color: (theme) => theme?.palette?.grey["200"],
          fontSize: (theme) => theme?.spacing(13),
          fontWeight: 100,
        }}
      >
        loading...
      </Typography>
    </Box>
  );
}

export default Loader;
