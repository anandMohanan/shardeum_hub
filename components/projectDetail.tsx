import type { SharediumProject } from "@prisma/client";
import { NextApiRequest } from "next";

export const ProjectDetail = ({
  queryProjects,
}: {
  queryProjects: SharediumProject[];
}) => {
  return (
    <>
      {queryProjects?.map((project: SharediumProject) => {
        console.log("project name" + project.name);

        return <></>;
      })}
    </>
  );
};
