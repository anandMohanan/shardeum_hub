import type { NextPage } from "next";
import { Loader } from "../../../components/loader";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const NftCategoryPage: NextPage = () => {
  const { data, isLoading } = api.filterByCategory.filterByNft.useQuery();
  if (isLoading) return <Loader />;

  return (
    <>
      <h2 className="mt-10 mb-7 text-center text-2xl font-bold lg:text-4xl">
        Experience{" "}
        <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
          NFT
        </span>{" "}
        Innovation
      </h2>
      <ProjectDetail queryProjects={data!} admin={false} />
    </>
  );
};

export default NftCategoryPage;
