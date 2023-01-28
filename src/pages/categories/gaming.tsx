import { NextPage } from "next";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const GamingCategoryPage: NextPage = () => {
  const { data } = api.filterByCategory.filterByGaming.useQuery();

  return (
    <>
      <ProjectDetail queryProjects={data} />
    </>
  );
};

export default GamingCategoryPage;
