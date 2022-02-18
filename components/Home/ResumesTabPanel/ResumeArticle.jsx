import Link from "next/link";
import EditIcon from "@mui/icons-material/EditOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import DownloadIcon from "@mui/icons-material/SimCardDownloadOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

import Article from "./Article";
import Button from "./Button";

const ResumeArticle = ({ title, href, caption, image }) => (
  <Article title={title} caption={caption} image={image}>
    <Link href={href} passHref>
      <Button component="a">
        <EditIcon />
        <span>Edit</span>
      </Button>
    </Link>
    <Button>
      <ShareIcon />
      <span>Share a link</span>
    </Button>
    <Button>
      <DownloadIcon />
      <span>Download PDF</span>
    </Button>
    <Button>
      <MoreIcon />
      <span>More</span>
    </Button>
  </Article>
);

export default ResumeArticle;
