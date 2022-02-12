import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

import AppHeader from "../components/App/AppHeader";

export default function Home() {
  return (
    <Box>
      <AppHeader />
      <Container>
        <Box>
          <Typography p={{ xs: 2, md: 4 }}>
            This is the page where non logged-in visitors land on.
          </Typography>

          <Stack>
            <Link href="/home">
              <Button variant="contained">Log In (Simulated for now)</Button>
            </Link>
            <Link href="/sunEditor">
              <Button variant="" style={{ justifyContent: "flex-start" }}>
                Test Sun Editor
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
