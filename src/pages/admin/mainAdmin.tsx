import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, type FC } from "react";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const MainAdmin: FC = () => {
  const approvalRequired = api.approval.approvalAwaiting.useQuery();
  const allProjects = api.project.getAdminProjects.useQuery();

  const user = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/").catch((e) => console.log(e));
  }, [user]);
  return (
    <>
      {/* <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
        Projects which require{" "}
        <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
          Approval
        </span>{" "}
      </h2>

      <ProjectDetail queryProjects={approvalRequired.data!} admin={true} /> */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav
          className="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="active hover:text-sec text-sec inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent py-4 px-1 text-sm hs-tab-active:border-accent hs-tab-active:font-semibold hs-tab-active:text-accent"
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            Approve Projects
          </button>
          <button
            type="button"
            className="text-sec inline-flex items-center gap-2 whitespace-nowrap border-b-[3px] border-transparent py-4 px-1 text-sm hover:text-accent hs-tab-active:border-accent hs-tab-active:font-semibold hs-tab-active:text-accent"
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Delete Projects
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
        >
          <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
            Projects which require{" "}
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
              Approval
            </span>{" "}
          </h2>

          <ProjectDetail queryProjects={approvalRequired.data!} admin={true} />
        </div>
        <div
          id="horizontal-alignment-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
            <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
              Delete
            </span>{" "}
            Projects
          </h2>
          <ProjectDetail queryProjects={allProjects.data!} admin={true} />
        </div>
      </div>
    </>
  );
};

export default MainAdmin;
