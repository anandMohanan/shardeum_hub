import { type AppProps, type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import { NavBar } from "../../components/navBar";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Footer } from "../../components/footer";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  SessionContextProvider,
  type Session,
} from "@supabase/auth-helpers-react";

const MyApp = ({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) => {
  useEffect(() => {
    import("preline");
  }, []);
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </SessionContextProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
