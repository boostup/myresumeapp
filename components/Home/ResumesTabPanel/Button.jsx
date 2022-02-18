import { Button, styled } from "@mui/material";

export default ({ children, ...other }) => (
  <CustomButton {...other} disableRipple>
    {children}
  </CustomButton>
);

const CustomButton = styled(Button)(({ theme, padding }) => {
  return {
    padding,
    justifyContent: "flex-start",
    alignItems: "revert",
    fontSize: "1rem",
    textTransform: "capitalize",
    textAlign: "left",
    "& svg": {
      marginRight: theme.spacing(2),
    },
    "& span": {
      color: "black",
    },
  };
});
