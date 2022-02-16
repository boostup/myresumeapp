import { useRef } from "react";
import {
  Button,
  Divider,
  LinearProgress as MUILinearProgress,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import Label from "../../EditorForm/Label";
import { fromRedToGreen } from "../../../utils/colors";
import { red } from "@mui/material/colors";

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

  const calcComplitionPercentage = (data) => Math.floor(Math.random() * 100);

  // @Todo: calculate progress according to the actual completedness level of the resume
  const progressPercentage = calcComplitionPercentage();
  const colorFromProgress = fromRedToGreen(progressPercentage);

  return (
    <Box ref={elRef} sx={rootStyles}>
      <Box sx={innerStyles}>
        <Box>
          <Label sx={{ color: colorFromProgress }}>{progressPercentage}%</Label>
          <Label>Profile completeness</Label>
        </Box>

        {/* @Todo: this button's functionality depends on being able to add sections to the resume, which is still not possible at the moment */}
        <Button>2% Add languages (?)</Button>
      </Box>
      <Divider />
      <Box sx={{ color: colorFromProgress }}>
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          color="inherit"
        />
      </Box>
    </Box>
  );
}

export default CompletionToolbar;

const rootStyles = {
  position: "sticky",
  top: 0,
  left: 0,
  margin: (theme) => `${theme.spacing(3)} 0`,
  padding: (theme) => `0 0 ${theme.spacing(1)} 0`,
  width: "100%",
  zIndex: 1000,
  "&[stuck]": {
    backgroundColor: "hotpink",
  },
};

const innerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  "& > div": {
    display: "flex",
    alignItems: "baseline",
  },
  "& > div > :nth-child(1)": {
    display: "inline-block",
    fontSize: "1.25rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    marginRight: "6px",
  },
};

const LinearProgress = styled(MUILinearProgress)(({ theme }) => ({
  height: 3,
}));
