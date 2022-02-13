import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AppHeader from "../components/App/AppHeader";
import DocumentsSection from "../components/Home/DocumentsSection";

export default function Home() {
  const responsiveness = {
    px: { xs: 1, sm: 6 },
  };
  return (
    <Box>
      <AppHeader sx={responsiveness} />
      <Container sx={responsiveness}>
        <Box>
          <DocumentsSection />
        </Box>
      </Container>
    </Box>
  );
}
