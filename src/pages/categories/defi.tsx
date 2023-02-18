import type { NextPage } from "next";
import { Loader } from "../../../components/loader";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const DefiCategoryPage: NextPage = () => {
  const { data, isLoading } = api.filterByCategory.filterByDefi.useQuery();
  if (isLoading) return <Loader />;
  return (
    <>
      <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
        Explore{" "}
        <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
          Defi
        </span>{" "}
        Revolution
      </h2>
      <ProjectDetail queryProjects={data!} admin={false} />
    </>
  );
};

export default DefiCategoryPage;
