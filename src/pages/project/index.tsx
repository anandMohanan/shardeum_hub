import Link from "next/link";
import { useRouter } from "next/router";
import { Loader } from "../../../components/loader";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const allProject = () => {
  const { data, isLoading } = api.project.getAllProjects.useQuery();
  if (isLoading) return <Loader />;
  return (
    <>
      {/* <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> */}
      {/* <ProjectDetail queryProjects={data!} /> */}
      <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
        Discover{" "}
        <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
          Decentralized
        </span>{" "}
        Innovations
      </h2>
      <ProjectDetail queryProjects={data!} admin={false} />

      {/* </div> */}
    </>
  );
};

export default allProject;
