import { useRouter } from "next/router";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const allProject = () => {
  const { data } = api.project.getAllProjects.useQuery();

  return (
    <>
      <h1>hi</h1>
      <ProjectDetail queryProjects={data} />
    </>
  );
};

export default allProject;
