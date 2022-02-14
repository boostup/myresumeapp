import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import AppHeader from "../../components/App/AppHeader";
import DocumentsSection from "../../components/Home/DocumentsSection";

import { initStorage } from "../../data/resumesDataManager";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    const userId = session?.user?.id;
    initStorage(userId);
  }, [session]);

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
