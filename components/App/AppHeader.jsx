import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ px: { xs: 0, sm: 2 } }}>
          <Link href="/">
            <Button style={{ color: "white" }}>Resume.cv</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;
