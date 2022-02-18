import Navbar from "./navbar";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathObj = {
    "/": "Home",
    "/about": "About",
  };

  return (
    <>
      <Head>
        <title>{pathObj[router.pathname]} | Next Movies</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
