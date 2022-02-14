import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

import AppHeader from "../components/App/AppHeader";

export default function Home() {
  return (
    <Box>
      <AppHeader />
      <Container>
        <Box sx={heroContainer}>
          <Typography variant="h1" sx={title}>
            Online resume builder
          </Typography>
          <Typography variant="h2" sx={subTitle}>
            Only 2% of resumes make it past the first round. Be in the top 2%
          </Typography>

          <Typography sx={slogan}>
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for. Easy to use and done within
            minutes - try now for free!
          </Typography>
          <Box>
            <Link href="/home">
              <Button variant="contained">Create My Resume</Button>
            </Link>
          </Box>
        </Box>

        <Box>
          <Stack>
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

const heroContainer = {
  backgroundColor: "#eff2f9",
  maxWidth: "700px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginY: "3rem",
  marginX: "auto",
  "& > *": {
    padding: "2rem",
  },
};

const title = {
  fontSize: "14px",
  letterSpacing: "1.8px",
  lineHeight: "20px",
  textTransform: "uppercase",
  color: "#1a1c6a",
  fontWeight: 600,
  marginBottom: "8px",
  textAlign: "center",
};

const subTitle = {
  fontWeight: 700,
  fontSize: "46px",
  lineHeight: "48px",
  marginBottom: "12px",
  textAlign: "center",
};

const slogan = {
  fontSize: "22px",
  lineHeight: "28px",
  marginBottom: "24px",
  textAlign: "center",
};
