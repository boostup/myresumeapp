import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import AppHeader from "../components/App/AppHeader";
import DocumentsSection from "../components/Home/DocumentsSection";

export default function Home() {
  return (
    <Box>
      <AppHeader />
      <Container>
        <Box>
          <DocumentsSection />
        </Box>
      </Container>
    </Box>
  );
}
