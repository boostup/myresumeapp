import { Button } from "@mui/material";
import Link from "next/link";

import AppHeader from "../components/App/AppHeader";

export default function Home() {
  return (
    <div>
      <AppHeader />
      <div>
        <Link href="/resumeEditor">
          <Button>Edit Your CV</Button>
        </Link>
        <Link href="/sunEditor">
          <Button>Test Sun Editor</Button>
        </Link>
      </div>
    </div>
  );
}
