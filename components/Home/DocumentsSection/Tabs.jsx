import MUITab from "@mui/material/Tab";
import { Box, styled } from "@mui/material";

export const Tab = styled(MUITab)(({ theme }) => ({
  padding: 0,
  minWidth: "70px",
  textTransform: "capitalize",

  [theme.breakpoints.up("xs")]: {
    marginRight: 0,
    width: "50%",
  },

  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(3),
    width: "auto",
  },
}));

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      {value === index && (
        <Box
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
          sx={{ py: { xs: 2, md: 5 } }}
        >
          {children}
        </Box>
      )}
    </>
  );
}
