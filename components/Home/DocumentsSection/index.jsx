import Box from "@mui/material/Box";
import Header from "./Header";
import TabsArea from "./TabsArea";

export default function DocumentsSection() {
  return (
    <Box sx={_sx.rootStyles}>
      <Box sx={_sx.innerStyles}>
        <Header />
      </Box>
      <TabsArea />
    </Box>
  );
}

const _sx = {
  rootStyles: {
    py: { xs: 2, sm: 9 },
  },
  innerStyles: {
    position: "relative",
  },
};
