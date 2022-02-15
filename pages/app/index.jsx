import { Container } from "@mui/material";
import { Box } from "@mui/system";

import AppHeader from "../../components/App/AppHeader";
import DocumentsSection from "../../components/Home/DocumentsSection";

export default function Home() {
  return (
    <Box>
      <AppHeader sx={_sx} />
      <Container sx={_sx}>
        <Box>
          <DocumentsSection />
        </Box>
      </Container>
    </Box>
  );
}

const _sx = {
  px: { xs: 2, md: 5, lg: 8 },
};
