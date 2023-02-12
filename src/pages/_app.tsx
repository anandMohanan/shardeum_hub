import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import { NavBar } from "../../components/navBar";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Footer } from "../../components/footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
