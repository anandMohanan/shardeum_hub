import type { NextPage } from "next";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const DefiCategoryPage: NextPage = () => {
  const { data } = api.filterByCategory.filterByDefi.useQuery();

  return (
    <>
      <ProjectDetail queryProjects={data!} />
    </>
  );
};

export default DefiCategoryPage;
