import type { SharediumProject } from "@prisma/client";
import { NextApiRequest } from "next";
import Link from "next/link";

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
          <div
            key={project.id}
            className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
          >
            <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
                <div className="flex h-52 flex-col items-center justify-center rounded-t-xl bg-gradient-to-br from-secondary to-accent hover:from-teal-200 hover:to-slate-500">
                  <img src={project.name} />
                </div>
                <div className="p-4 md:p-6">
                  <span className="mb-1 block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500"></span>
                  <Link
                    className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    href={`/project/${project.name}`}
                  >
                    {project.name}
                  </Link>
                  <p className="mt-3 text-gray-500">{project.about}</p>
                </div>
                <div className="mt-auto flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                  <Link
                    className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white py-3 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
                    href={project.discordLink}
                  >
                    Discord
                  </Link>
                  <Link
                    className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white py-3 px-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800 sm:p-4"
                    href={project.twitterLink}
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
