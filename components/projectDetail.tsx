import type { SharediumProject } from "@prisma/client";
import { NextApiRequest } from "next";
import Image from "next/image";
import Link from "next/link";

export const ProjectDetail = ({
  queryProjects,
  admin = false,
}: {
  queryProjects: SharediumProject[];
  admin: boolean;
}) => {
  return (
    <>
      <div className=" px-4 py-10 sm:px-6 ">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {queryProjects?.map((project: SharediumProject) => {
            console.log("project name" + project.name);

            return (
              // <div
              //   key={project.id}
              //   className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
              // >
              //   <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              //     <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
              //       <div className="flex h-52 flex-col items-center justify-center rounded-t-xl bg-gradient-to-br from-secondary to-accent hover:from-teal-200 hover:to-slate-500">
              //         <img src={project.name} />
              //       </div>
              //       <div className="p-4 md:p-6">
              //         <span className="mb-1 block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
              //         <Link
              //           className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white"
              //           href={`/project/${project.name}`}
              //         >
              //           {project.name}
              //         </Link>
              //         <p className="mt-3 text-gray-500">{project.about}</p>
              //       </div>
              //       <div className="mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
              //         <Link
              //           className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white py-3 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
              //           href={project.discordLink}
              //         >
              //           Discord
              //         </Link>
              //         <Link
              //           className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white py-3 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
              //           href={project.twitterLink}
              //         >
              //           Twitter
              //         </Link>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <Link
                key={project.id}
                className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:border-secondary hover:shadow-md dark:border-gray-800 dark:bg-slate-900 hover:dark:border-secondary"
                href={
                  admin ? `/admin/${project.name}` : `/project/${project.name}`
                }
              >
                <div className="p-4 md:p-5">
                  <div className="flex">
                    <img
                      className="inline-block h-[3.234rem] w-[3.500rem] rounded-full  lg:w-[3.875rem]"
                      src={project.logoUrl ? project.logoUrl : "no image "}
                      alt={project.name}
                    />
                    <div className="ml-5 grow">
                      <h3 className="font-semibold text-gray-800 group-hover:text-ter dark:text-gray-200 dark:group-hover:text-ter">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">{project.about}</p>
                    </div>
                  </div>
                  {project.website && (
                    <Link
                      className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                      href={project?.website ? project?.website : "#"}
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </Link>
                  )}

                  {project.twitterLink && (
                    <Link
                      className="lr-only inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                      href={project?.twitterLink ? project?.twitterLink : "#"}
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </Link>
                  )}
                  {project.githubLink && (
                    <Link
                      className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                      href={project?.githubLink ? project?.githubLink : "#"}
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </Link>
                  )}
                  {project.discordLink && (
                    <Link
                      className="inline-flex h-10 w-10 items-center justify-center gap-x-3.5 rounded-md text-center text-gray-200 transition hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                      href={project?.discordLink ? project?.discordLink : "#"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-discord"
                        viewBox="0 0 16 16"
                      >
                        {" "}
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />{" "}
                      </svg>
                    </Link>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
