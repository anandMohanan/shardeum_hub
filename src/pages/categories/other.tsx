import type { NextPage } from "next";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const OtherCategoryPage: NextPage = () => {
  const { data } = api.filterByCategory.filterByOther.useQuery();

  return (
    <>
      <ProjectDetail queryProjects={data!} />
    </>
  );
};

export default OtherCategoryPage;
