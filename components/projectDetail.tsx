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

        return (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="/testimg.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {project.name}
                  <div className="badge-secondary badge">
                    {project.category}
                  </div>
                  {/* <div className="badge-secondary badge">NFT</div> */}
                </h2>
                <p>{project.description}</p>
                <p>{project.keywords}</p>
                {/* <div className="card-actions justify-end">
                  <div className="badge-outline badge">Fashion</div>
                  <div className="badge-outline badge">Products</div>
                </div> */}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
