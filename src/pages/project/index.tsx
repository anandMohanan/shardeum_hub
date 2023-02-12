import { useRouter } from "next/router";
import { ProjectDetail } from "../../../components/projectDetail";
import { api } from "../../utils/api";

const allProject = () => {
  const { data } = api.project.getAllProjects.useQuery();

  return (
    <>
      {/* <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> */}
      <ProjectDetail queryProjects={data!} />
      {/* </div> */}
    </>
  );
};

export default allProject;
