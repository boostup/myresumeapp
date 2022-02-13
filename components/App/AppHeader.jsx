import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";

function AppHeader({ sx }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: "unset",
          borderBottom: "1px solid",
          borderColor: "grey.200",
        }}
      >
        <Toolbar
          sx={{
            ...sx,
            height: { xs: 64, md: 80 },
          }}
        >
          <Link href="/">
            <Button
              sx={{
                textTransform: "lowercase",
              }}
            >
              <Image
                src="/for-light-bg.svg"
                width={120}
                height={32}
                alt="resume.cv"
              />
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
