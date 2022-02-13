import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import AddIcon from "@mui/icons-material/AddCircleOutline";

export default ({ image, title, caption, children, ...other }) => {
  const h = 268;
  const w = 190;
  const xsH = 144;
  const xsW = 102;
  const br = 2;

  return (
    <Stack {...other} component="article" direction="row" spacing={{ xs: 3 }}>
      {image ? (
        <Box
          sx={{
            height: { xs: xsH, md: h },
            width: { xs: xsW, md: w },
            borderRadius: br,
            overflow: "hidden",
          }}
        >
          <Image height={h} width={w} src={image} />
        </Box>
      ) : (
        <Box
          sx={{
            height: { xs: xsH, md: h },
            width: { xs: xsW, md: w },
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "grey.300",
            borderRadius: br,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AddIcon
            fontSize="large"
            sx={{ width: "2.5em", height: "2.5em", color: "grey.300" }}
          />
        </Box>
      )}

      <Stack maxWidth={200}>
        <Typography
          variant="button"
          fontSize={22}
          color={image ? "" : "grey.500"}
          textTransform="capitalize"
        >
          {title}
        </Typography>
        <Typography variant="caption" color="grey.500" mb={2}>
          {caption}
        </Typography>
        {children}
      </Stack>
    </Stack>
  );
};
