import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import AddIcon from "@mui/icons-material/AddCircle";

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
            borderColor: "lightgray",
            borderRadius: br,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AddIcon color="disabled" fontSize="large" />
        </Box>
      )}

      <Stack maxWidth={200}>
        <Typography
          variant="button"
          fontSize={22}
          color={image ? "" : "text.disabled"}
          textTransform="capitalize"
        >
          {title}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          {caption}
        </Typography>
        {children}
      </Stack>
    </Stack>
  );
};
