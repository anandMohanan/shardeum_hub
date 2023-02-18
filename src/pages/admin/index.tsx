import { useRouter } from "next/router";
import { useState } from "react";
import type { FormEvent } from "react";
import { api } from "../../utils/api";
import Link from "next/link";
import { ProjectDetail } from "../../../components/projectDetail";

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "password") {
      // setIsLoggedIn(true);
      setCurrent(false);
      router.push("/admin/mainAdmin").catch((e) => console.log(e));
    } else {
      setErrorMessage("Incorrect username or password. Please try again.");
      alert("Incorrect username or password. Please try again.");
      router
        .push("/")
        .catch((e) => console.log(`Cant route to / ${e as string}`));
    }
  };

  const changeApprovalButton = (id: string) => {
    approveMutation.mutate({ id: id, status: true });
    setTimeout(() => {
      console.log("Approval ongoing");
    }, 5000);
    router.reload();
    setIsLoggedIn(true);
    setCurrent(false);
  };

  return (
    <div>
      {current && (
        <form className="mt-10 p-10" onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {/* {isLoggedIn && (
        <>
          <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
            Projects which require{" "}
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
              Approval
            </span>{" "}
          </h2>

          <ProjectDetail queryProjects={approvalRequired.data!} admin={true} />
        </>
      )} */}
    </div>
  );
};

export default Admin;
