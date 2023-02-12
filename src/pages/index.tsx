import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../../components/navBar";
import { ProjectDetail } from "../../components/projectDetail";
// import {} from "next/font/google";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const projectCounts = api.project.getProjectCount.useQuery();
  const { data } = api.project.getAllProjects.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform  before:bg-cover before:bg-top before:bg-no-repeat ">
        <div className="mx-auto max-w-[85rem] px-4 pt-24 pb-10 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 rounded-full border border-transparent  bg-white bg-gradient-to-tl from-secondary to-ter p-1 pl-3 text-sm font-semibold italic text-accent  transition hover:from-ter  hover:to-secondary dark:bg-gray-800 dark:text-primary "
              href="#"
            >
              Explore All projects
              <span className="mr-3">
                <svg
                  className="h-2 w-2"
                  // width="10"
                  // height="10"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="mx-auto mt-5 max-w-2xl text-center">
            <h1 className="text-primary-800 dark:text-primary-200 block text-4xl font-bold md:text-5xl lg:text-6xl">
              Let's Build in{" "}
              <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Shardeum
              </span>
            </h1>
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Welcome to Shardeum, where creativity meets innovation through
              decentralized projects built on our blockchain technology. Each
              project built on Shardeum represents a unique application of
              decentralized systems. Discover the endless possibilities of this
              technology by exploring all the projects showcased on this
              website.
            </p>
          </div>

          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <span className="group relative inline-flex items-center justify-center gap-x-3.5 rounded-md border bg-white p-2 pl-4 pr-4 text-center font-mono text-sm font-medium shadow-sm transition hover:border-ter focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-800 dark:bg-slate-900 dark:text-white dark:shadow-slate-700/[.7] dark:hover:border-ter dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
              $ count: {projectCounts.data}
            </span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              How to build in Shardeum:
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              Solidity
            </span>
            <svg
              className="h-5 w-5 text-gray-300 dark:text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                stroke-linecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1.5 text-sm font-medium text-secondary decoration-ter decoration-wavy hover:underline"
              href="https://docs.shardeum.org/"
            >
              Shardeum docs
              <svg
                className="h-2.5 w-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
