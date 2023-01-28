import { NextPage } from "next";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const NftCategoryPage: NextPage = () => {
  const { data } = api.filterByCategory.filterByNft.useQuery();

  return (
    <>
      <ProjectDetail queryProjects={data} />
    </>
  );
};

export default NftCategoryPage;
