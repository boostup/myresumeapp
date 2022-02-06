import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
