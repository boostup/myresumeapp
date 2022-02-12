import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

import AddIcon from "@mui/icons-material/AddCircle";

export default ({ image, title, caption, children, ...other }) => {
  const h = 250;
  const w = 190;
  const br = 2;

  return (
    <Stack {...other} component="article" direction="row" spacing={{ xs: 3 }}>
      {image ? (
        //
        <Box
          sx={{
            height: h,
            width: w,
            borderRadius: br,
            overflow: "hidden",
          }}
        >
          <Image height={h} width={w} src={image} />
        </Box>
      ) : (
        <Box
          sx={{
            height: h,
            width: w,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "lightgray",
            borderRadius: br,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
