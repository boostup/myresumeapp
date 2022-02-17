import { useState } from "react";
import { Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";

import { Tab, TabPanel } from "./Tabs";
import ResumesTabPanel from "../ResumesTabPanel";

function TabsArea() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={_sx.tabsAreaStyles}>
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
    </>
  );
}

export default TabsArea;

const _sx = {
  tabsAreaStyles: { borderBottom: 1, borderColor: "divider" },
};
