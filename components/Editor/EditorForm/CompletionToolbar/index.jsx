import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";

import styles from "./CompletionToolbar.module.css";

function CompletionToolbar() {
  const elRef = useRef();
  const observer = new IntersectionObserver(
    ([e]) => e.target.toggleAttribute("stuck", e.intersectionRatio < 0.1),
    {
      root: null,
      rootMargin: "-150px",
    }
  );

  if (elRef.current) observer.observe(elRef.current);

  return (
    <Box
      ref={elRef}
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        margin: (theme) => `${theme.spacing(3)} 0`,
        padding: (theme) => `0 0 ${theme.spacing(1)} 0`,
        zIndex: 1000,
        "&[stuck]": {
          backgroundColor: "hotpink",
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        backgroundColor="white"
        height="50px"
      >
        <Box>100% Profile completeness</Box>
        <Box>2% Add languages (?)</Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default CompletionToolbar;
