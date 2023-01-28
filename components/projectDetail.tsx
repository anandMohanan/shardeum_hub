import { SharediumProject } from "@prisma/client";
import { NextApiRequest } from "next";

import { Vote } from "./vote";

export const ProjectDetail = ({ queryProjects }: any) => {
  return (
    <>
      {queryProjects?.map((project: SharediumProject) => {
        console.log("project name" + project.name);

        return (
          <>
            <div className="mx-auto my-32 flex h-auto max-w-4xl flex-wrap items-center ">
              <div
                id="profile"
                className="mx-6 w-full rounded-lg bg-white opacity-75 shadow-2xl lg:mx-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none"
              >
                <div className="p-4 text-center md:p-12 lg:text-left">
                  <div className="mx-auto -mt-16 block h-48 w-48 rounded-full bg-cover bg-center shadow-xl lg:hidden"></div>

                  <h1 className="pt-8 text-3xl font-bold lg:pt-0">
                    <a href={`/project/${project.name}`}>{project.name}</a>
                  </h1>
                  <div className="mx-auto w-4/5 border-b-2 border-green-500 pt-3 opacity-25 lg:mx-0"></div>
                  <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
                    <svg
                      className="h-4 fill-current pr-4 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                    </svg>{" "}
                    {project.description}
                  </p>
                  <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:justify-start lg:text-sm">
                    <svg
                      className="h-4 fill-current pr-4 text-green-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                    </svg>{" "}
                    {project.about}
                  </p>
                  <p className="pt-8 text-sm">{project.category}</p>
                  <Vote project={project} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const ip =
    req.headers["x-forwarded-for"] || req.headers["Remote_Addr"] || "NA";
  console.log("ip in ssr" + ip);

  return { props: { ip } };
}
