import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AppHeader from "../components/App/AppHeader";
import DocumentsSection from "../components/Home/DocumentsSection";

export default function Home() {
  const responsiveness = {
    px: { xs: 2, md: 5, lg: 8 },
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
