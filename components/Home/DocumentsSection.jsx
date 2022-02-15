import { useState } from "react";
import { useSession } from "next-auth/react";

import Tabs from "@mui/material/Tabs";
import MUITab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, styled } from "@mui/material";

import ResumesTabPanel from "./ResumesTabPanel";
import { createNewResume } from "../../data/resumesDataManager";

export default function DocumentsSection() {
  const [value, setValue] = useState(0);
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const newResume = () => {
    const newResumeId = createNewResume(userId);
    location = `/app/resumes/${newResumeId}`;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 9 },
      }}
    >
      <Box position={"relative"}>
        <Typography variant="subtitle1" fontSize={{ xs: "2rem" }}>
          Documents
        </Typography>
        <Button
          onClick={newResume}
          variant={"contained"}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          + Create New
        </Button>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="switch between documents sections (resumes, cover letters, etc)"
        >
          <Tab label="Resumes" />
          <Tab label="Cover Letters" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ResumesTabPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        This features comes in the near future if user survey confirms it could
        be useful to them.
      </TabPanel>
    </Box>
  );
}

const Tab = styled(MUITab)(({ theme }) => ({
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 5 }}>{children}</Box>}
    </div>
  );
}
