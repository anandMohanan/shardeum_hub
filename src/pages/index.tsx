import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Loader } from "../../components/loader";
import { NavBar } from "../../components/navBar";
import { ProjectDetail } from "../../components/projectDetail";
import { SearchInput } from "../../components/searchInput";
import { SlidingText } from "../../components/slidingText";
import { IBM_Plex_Mono } from "@next/font/google";

import { api } from "../utils/api";

export const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
  weight: "400",
});

const Home: NextPage = () => {
  const projectCounts = api.project.getProjectCount.useQuery();
  // const { data, isLoading } = api.project.getAllProjects.useQuery();
  const nftProjects = api.filterByCategory.fiveNft.useQuery();
  const defiProjects = api.filterByCategory.fiveDefi.useQuery();
  const gamingProjects = api.filterByCategory.fiveGaming.useQuery();
  const otherProjects = api.filterByCategory.fiveOther.useQuery();

  // if (isLoading) return <Loader />;

  return (
    <>
      <Head>
        <title>Shardeum Hub</title>
        <meta name="description" content="Showcase your shardeum projects" />
      </Head>
      <SearchInput />
      <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:-z-[1] before:h-full before:w-full before:-translate-x-1/2 before:transform  before:bg-cover before:bg-top before:bg-no-repeat ">
        <div className="mx-auto max-w-[85rem] px-4 pt-16 pb-5 sm:px-6 lg:px-8">
          <div className="mx-auto  max-w-2xl text-center">
            <h1
              className={`${ibm.className} text-primary-800 dark:text-primary-200 block text-4xl   font-extrabold md:text-5xl lg:text-6xl`}
            >
              Let&apos;s Build in{" "}
              <span className=" bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent  hover:from-pink-600 hover:to-purple-400">
                Shardeum
              </span>
            </h1>
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p
              className={`${ibm.className} text-lg text-gray-600 dark:text-gray-400`}
            >
              Welcome to Shardeum, where creativity meets innovation through
              decentralized projects built on our blockchain technology. Each
              project built on Shardeum represents a unique application of
              decentralized systems. Discover the endless possibilities of this
              technology by exploring all the projects showcased on this
              website.
            </p>
          </div>

          <div className="mt-8 grid w-full gap-3 sm:inline-flex sm:justify-center">
            <span
              className={`${ibm.className} group relative inline-flex items-center justify-center gap-x-3.5 rounded-md border bg-black p-2 pl-4 pr-4 text-center font-mono text-sm font-medium text-white shadow-sm transition hover:border-ter focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white  dark:border-gray-800 dark:bg-white dark:text-black dark:shadow-slate-700/[.7] dark:hover:border-ter dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800`}
            >
              count: {projectCounts.data ? projectCounts.data : "_"}
            </span>
          </div>

          <div className="mt-8 mb-8 flex items-center justify-center gap-x-1 sm:gap-x-3">
            <span
              className={` ${ibm.className} text-sm text-gray-600 dark:text-gray-400`}
            >
              How to build in Shardeum:
            </span>
            <span
              className={`${ibm.className}  text-sm font-bold text-gray-900 dark:text-white`}
            >
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
                strokeLinecap="round"
              />
            </svg>
            <a
              className={`${ibm.className} inline-flex items-center gap-x-1.5 text-sm font-medium text-secondary decoration-ter decoration-wavy hover:underline`}
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <SlidingText />
      <hr className="mx-auto  my-6 h-1 w-80 rounded border-0 bg-black dark:bg-white md:my-10" />
      <section>
        <div className="flex justify-center blur-0 filter lg:mb-20">
          <Link
            className={`${ibm.className} blur- inline-flex items-center gap-x-2 border-dotted  border-black   bg-white bg-gradient-to-r from-pink-200  to-pink-400 p-1 pl-3 text-xl  font-extrabold italic text-primary blur-0 filter transition  hover:from-pink-500 hover:to-ter  dark:bg-gray-800 dark:text-black  `}
            href="/project"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </Link>
        </div>
        {/* <div className=" px-4 py-10 sm:px-6 ">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {data?.map((project) => {
              return (
                <Link
                  key={project.id}
                  className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:border-secondary hover:shadow-md dark:border-gray-800 dark:bg-slate-900 hover:dark:border-secondary"
                  href={`/project/${project.name}`}
                >
                  <div className="p-4 md:p-5">
                    <div className="flex">
                      <img
                        className="inline-block h-[3.234rem] w-[3.500rem] rounded-full ring-2 ring-ter dark:ring-secondary lg:w-[3.875rem]"
                        src={project.logoUrl}
                      />
                      <div className="ml-5 grow">
                        <h3 className="font-semibold text-gray-800 group-hover:text-ter dark:text-gray-200 dark:group-hover:text-ter">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500">{project.about}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div> */}
        <div className={`px-4 py-10 sm:px-6 ${ibm.className} `}>
          <div className="grid  divide-slate-700 overflow-hidden  rounded-xl shadow-sm   sm:flex sm:divide-y-0 sm:divide-x">
            <div className="mb-10 flex flex-[1_0_0%] flex-col bg-white dark:bg-transparent">
              {/* <img
                className="h-auto w-full rounded-t-xl sm:rounded-tr-none"
                src="/testimg.jpg"
                alt="Image Description"
              /> */}
              <span
                // className={`${ibm.className} text-center text-7xl font-extrabold text-black dark:text-white`}
                className={`text bg-gradient-to-r from-indigo-500 via-ter bg-clip-text text-center text-5xl font-extrabold text-transparent lg:text-7xl`}
              >
                NFT
              </span>
              <div className="flex-1 p-4 md:p-5">
                {nftProjects.isLoading ? (
                  <Loader />
                ) : (
                  nftProjects.data?.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className={`${ibm.className} mb-2 cursor-pointer rounded-md bg-slate-100 p-3 filter hover:bg-slate-700 hover:text-white hover:shadow-lg dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black`}
                      >
                        <Link href={`/project/${project.name}`}>
                          <h1 className="text-ter">{project.name}</h1>
                          <span>{project.about}</span>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="flex flex-[1_0_0%] flex-col bg-white dark:bg-transparent">
              {/* <img
                className="h-auto w-full rounded-t-xl sm:rounded-tr-none"
                src="/testimg.jpg"
                alt="Image Description"
              /> */}
              <span
                // className={`${ibm.className} text-center text-7xl font-extrabold text-black dark:text-white`}
                className={`text bg-gradient-to-r from-indigo-500 via-ter bg-clip-text text-center text-5xl font-extrabold text-transparent lg:text-7xl`}
              >
                DEFI
              </span>
              <div className="flex-1 p-4 md:p-5">
                {defiProjects.isLoading ? (
                  <Loader />
                ) : (
                  defiProjects.data?.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className={`${ibm.className} mb-2 cursor-pointer rounded-md bg-slate-100 p-3 filter hover:bg-slate-700 hover:text-white hover:shadow-lg dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black`}
                      >
                        <Link href={`/project/${project.name}`}>
                          <h1 className="text-ter">{project.name}</h1>
                          <span>{project.about}</span>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="flex flex-[1_0_0%] flex-col bg-white dark:bg-transparent">
              {/* <img
                className="h-auto w-full rounded-t-xl sm:rounded-tr-none"
                src="/testimg.jpg"
                alt="Image Description"
              /> */}
              <span
                // className={`${ibm.className} text-center text-7xl font-extrabold text-black dark:text-white`}
                className={`text bg-gradient-to-r from-indigo-500 via-ter bg-clip-text text-center text-5xl font-extrabold text-transparent lg:text-7xl`}
              >
                GAMING
              </span>
              <div className="flex-1 p-4 md:p-5">
                {gamingProjects.isLoading ? (
                  <Loader />
                ) : (
                  gamingProjects.data?.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className={`${ibm.className} mb-2 cursor-pointer rounded-md bg-slate-100 p-3 filter hover:bg-slate-700 hover:text-white hover:shadow-lg dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black`}
                      >
                        <Link href={`/project/${project.name}`}>
                          <h1 className="text-ter">{project.name}</h1>
                          <span>{project.about}</span>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div className="flex flex-[1_0_0%] flex-col bg-white dark:bg-transparent">
              {/* <img
                className="h-auto w-full rounded-t-xl sm:rounded-tr-none"
                src="/testimg.jpg"
                alt="Image Description"
              /> */}
              <span
                // className={`${ibm.className} text-center text-7xl font-extrabold text-black dark:text-white`}
                className={`text bg-gradient-to-r from-indigo-500 via-ter bg-clip-text text-center text-5xl font-extrabold text-transparent lg:text-7xl`}
              >
                OTHER
              </span>
              <div className="flex-1 p-4 md:p-5">
                {otherProjects.isLoading ? (
                  <Loader />
                ) : (
                  otherProjects.data?.map((project, i) => {
                    return (
                      <div
                        key={i}
                        className={`${ibm.className} mb-2 cursor-pointer rounded-md bg-slate-100 p-3 filter hover:bg-slate-700 hover:text-white hover:shadow-lg dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black`}
                      >
                        <Link href={`/project/${project.name}`}>
                          <h1 className="text-ter">{project.name}</h1>
                          <span>{project.about}</span>
                        </Link>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <Link
              className="group flex flex-col rounded-xl border bg-white shadow-sm transition  hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:shadow-lg   dark:shadow-slate-900 "
              href="https://discord.com/invite/shardeum"
            >
              <div className="p-4 md:p-5">
                <div className="flex">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>

                  <div className="ml-5 grow">
                    <h3 className="font-semibold text-gray-800 group-hover:text-ter dark:text-gray-200 dark:group-hover:text-ter">
                      Ask Shardeum community
                    </h3>
                    <p className="text-sm text-gray-500">
                      Get help from 200k+ Shardeum users
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              className="group flex flex-col rounded-xl border bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:shadow-lg   dark:shadow-slate-900"
              href="https://docs.shardeum.org/"
            >
              <div className="p-4 md:p-5">
                <div className="flex">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>

                  <div className="ml-5 grow">
                    <h3 className="font-semibold text-gray-800 group-hover:text-ter dark:text-gray-200 dark:group-hover:text-ter">
                      Need help?
                    </h3>
                    <p className="text-sm text-gray-500">
                      Just click to head to «Help».
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              className="group flex flex-col rounded-xl border bg-white transition   hover:shadow-md dark:border-gray-800 dark:bg-slate-900 dark:shadow-lg dark:shadow-slate-900"
              href="#"
            >
              <div className="p-4 md:p-5">
                <div className="flex">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-gray-800 dark:text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                  </svg>

                  <div className="ml-5 grow">
                    <h3 className="font-semibold text-gray-800  group-hover:text-ter dark:text-gray-200 dark:group-hover:text-ter">
                      Email us
                    </h3>
                    <p className="text-sm text-gray-500">
                      Reach us at{" "}
                      <span className="font-medium text-blue-600 dark:text-blue-500">
                        info@site.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
