import type { NextPage } from "next";
import { Loader } from "../../../components/loader";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const GamingCategoryPage: NextPage = () => {
  const { data, isLoading } = api.filterByCategory.filterByGaming.useQuery();
  if (isLoading) return <Loader />;
  return (
    <>
      <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
        Enter the future of{" "}
        <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
          Gaming
        </span>{" "}
      </h2>
      <ProjectDetail queryProjects={data!} admin={false} />
    </>
  );
};

export default GamingCategoryPage;
