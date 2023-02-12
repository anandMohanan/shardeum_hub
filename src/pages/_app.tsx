import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import { NavBar } from "../../components/navBar";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
