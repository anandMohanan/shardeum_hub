import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { api } from "../../utils/api";
import Link from "next/link";
import { ProjectDetail } from "../../../components/projectDetail";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Admin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [current, setCurrent] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const approvalRequired = api.approval.approvalAwaiting.useQuery();
  const approveMutation = api.approval.changeApproval.useMutation();
  const session = useSession();
  const supabase = useSupabaseClient();
  useEffect(() => {
    if (session) {
      router.push("/admin/mainAdmin").catch((e) => console.log(e));
    }
  }, [session]);

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (formData.username === "admin" && formData.password === "password") {
  //     // setIsLoggedIn(true);
  //     setCurrent(false);
  //     router.push("/admin/mainAdmin").catch((e) => console.log(e));
  //   } else {
  //     setErrorMessage("Incorrect username or password. Please try again.");
  //     alert("Incorrect username or password. Please try again.");
  //     router
  //       .push("/")
  //       .catch((e) => console.log(`Cant route to / ${e as string}`));
  //   }
  // };

  // const changeApprovalButton = (id: string) => {
  //   approveMutation.mutate({ id: id, status: true });
  //   setTimeout(() => {
  //     console.log("Approval ongoing");
  //   }, 5000);
  //   router.reload();
  //   setIsLoggedIn(true);
  //   setCurrent(false);
  // };
  const login = async () => {
    if (
      formData.username == "ananthkvmohanan@gmail.com" &&
      formData.password == "ananth@7777"
    ) {
      await supabase.auth.signInWithPassword({
        email: "ananthkvmohanan@gmail.com",
        password: "ananth@7777",
      });
    }
  };

  return (
    <div>
      {/* {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : null} */}
      {!session ? (
        <>
          <input
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button onClick={() => login()}>login</button>
        </>
      ) : null}
    </div>
  );
};

export default Admin;
