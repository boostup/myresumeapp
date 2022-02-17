import { useSession, signIn, signOut } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { Button } from "@mui/material";
import Image from "next/image";

function AppHeader({ sx }) {
  const { data: session } = useSession();

  return (
    <Box sx={_sx.root}>
      <AppBar position="static" color="transparent" sx={_sx.appBar}>
        <Toolbar
          sx={(theme) => {
            return {
              ...sx,
              ..._sx.toolBar(theme),
            };
          }}
        >
          <Link href="/">
            {/* @Todo: remove button padding */}
            <Button sx={_sx.logo}>
              <Image
                src="/for-light-bg.svg"
                width={120}
                height={32}
                alt="resume.cv"
              />
            </Button>
          </Link>

          <Box sx={_sx.panel}>
            {session && (
              <Box>
                <Button
                  onClick={() =>
                    signOut({
                      callbackUrl: `${window.location.origin}/`,
                    })
                  }
                >
                  Sign out
                </Button>
              </Box>
            )}

            {!session && (
              <Box>
                <Button
                  variant="contained"
                  onClick={() =>
                    signIn(null, {
                      callbackUrl: `${window.location.origin}/app/`,
                    })
                  }
                >
                  Sign in
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppHeader;

const _sx = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "unset",
    borderBottom: "1px solid",
    borderColor: "grey.200",
  },
  toolBar: (theme) => ({
    height: {
      xs: theme.shape.toolbar.xs,
      md: theme.shape.toolbar.md,
    },
  }),
  logo: {
    textTransform: "lowercase",
  },
  panel: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row-reverse",
  },
};
