import Link from "next/link";
import { Button, LinearProgress as MUILinearProgress } from "@mui/material";
import { Box, styled } from "@mui/system";

import Label from "../Label";
import { fromRedToGreen } from "../../../utils/colors";
import useIntersect from "../../../hooks/useIntersect";

function CompletionToolbar() {
  // @Todo: calculate progress according to the actual completedness level of the resume
  const progressPercentage = calcComplitionPercentage();
  const colorFromProgress = fromRedToGreen(progressPercentage);

  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });

  const className = Math.round(entry?.intersectionRatio) ? "" : "sticky";

  return (
    <Box ref={ref} sx={rootStyles}>
      <Box sx={innerStyles} className={className}>
        <Box sx={panelStyles}>
          <Box>
            <Label
              sx={{
                ...labelStyles,
                color: colorFromProgress,
              }}
            >
              {progressPercentage}%
            </Label>
            <Label>Profile completeness</Label>
          </Box>

          {/* @Todo: this button's functionality depends on being able to add sections to the resume, which is still not possible at the moment */}
          <Link sx={addSection} href="javascript:void(0)">
            <Box>
              <Label sx={labelStyles}>2%</Label>{" "}
              <Label>Add languages (?)</Label>
            </Box>
          </Link>
        </Box>
        <Box sx={{ color: colorFromProgress }}>
          {/* @Todo: this component value is changed every time the view is rendered. this is not expected behavior. */}
          <LinearProgress
            variant="determinate"
            value={progressPercentage}
            color="inherit"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default CompletionToolbar;

const LinearProgress = styled(MUILinearProgress)(({ theme }) => ({
  height: 3,
}));

const calcComplitionPercentage = (data) => Math.floor(Math.random() * 100);
const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const rootStyles = {
  position: "relative",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  width: "100%",
  zIndex: 1000,
};

const innerStyles = {
  width: "100%",
  padding: "1rem 0",
  "&.sticky": {
    position: "fixed",
    backgroundColor: "white",
    top: "0",
    left: "0",
    padding: {
      xs: "0.5rem 5vw 1rem",
      sm: "0.5rem 5vw 1rem",
      md: "1rem 15vw 1rem",
      lg: "1rem 5vw 1rem",
    },
    maxWidth: {
      lg: "50vw",
    },
  },
};

const panelStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "white",
  "& > *": {
    display: "flex",
    alignItems: "baseline",
  },
};

const labelStyles = {
  display: "inline-block",
  fontSize: "1.25rem",
  lineHeight: "1.25rem",
  fontWeight: 600,
  marginRight: "6px",
};

const addSection = {
  display: { xs: "none", sm: "flex" },
  textTransform: "capitalize",
  padding: 0,
  "& > div": {
    display: "flex",
    alignItems: "baseline",
  },
};
