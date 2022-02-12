import { Button, styled } from "@mui/material";

export default ({ children, ...other }) => (
  <CustomButton {...other} disableRipple>
    {children}
  </CustomButton>
);

const CustomButton = styled(Button)(({ theme }) => {
  return {
    justifyContent: "flex-start",
    alignItems: "revert",
    fontSize: "1rem",
    textTransform: "capitalize",
    "& svg": {
      marginRight: theme.spacing(2),
    },
    "& span": {
      color: "black",
    },
  };
});
