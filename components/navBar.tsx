import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { theme, setTheme, systemTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const curTheme = theme === "system" ? systemTheme : theme;
    if (curTheme === "dark") {
      return (
        <a
          className=" group mr-3 block flex cursor-pointer items-center font-medium text-gray-600  hover:text-secondary dark:text-gray-400 dark:hover:text-secondary"
          onClick={() => setTheme("light")}
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
          </svg>
        </a>
      );
    } else {
      return (
        <a
          className="group mr-3  flex cursor-pointer items-center font-medium  text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary"
          onClick={() => setTheme("dark")}
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </a>
      );
    }
  };
  return (
    <>
      <header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
        <nav
          className="relative mx-2 mt-6 w-full max-w-7xl rounded-[36px] border border-secondary bg-white py-3 px-4 dark:border-secondary dark:bg-primary md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {renderThemeChanger()}
            <Link
              className="flex-none text-xl font-semibold dark:text-accent"
              href="/"
              aria-label="Shardeum Hub"
            >
              Shardeum Hub
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle dark:bg-slate bg-purple inline-flex items-center justify-center gap-2 rounded-full border p-2 align-middle text-sm font-medium text-primary shadow-sm transition-all hover:bg-accent focus:outline-none  focus:ring-offset-white dark:border-secondary dark:text-accent dark:hover:bg-primary dark:hover:text-accent dark:focus:ring-offset-primary"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="h-4 w-4 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden h-4 w-4 hs-collapse-open:block"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
          >
            <div className="mt-5 flex flex-col gap-y-4 gap-x-0 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:pl-7">
              <Link
                className="font-medium text-primary dark:text-accent md:py-6"
                href="/about"
                aria-current="page"
              >
                About
              </Link>

              <div className="hs-dropdown [--strategy:static] [--adaptive:none] md:py-4 md:[--strategy:fixed] md:[--trigger:hover]">
                <button
                  type="button"
                  className="flex w-full items-center font-medium text-primary hover:text-secondary dark:text-accent dark:hover:text-secondary "
                >
                  Categories
                  <svg
                    className="text-accent-600 ml-2 h-2.5 w-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div className="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-primary md:w-48 md:border md:shadow-md md:duration-[150ms] md:dark:border">
                  <Link
                    className="focus:ring-blue flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-secondary focus:ring-2 dark:text-accent dark:hover:bg-secondary dark:hover:text-accent"
                    href="/categories/nft"
                  >
                    Nft
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-secondary focus:ring-2 focus:ring-blue-500 dark:text-accent dark:hover:bg-secondary dark:hover:text-accent"
                    href="/categories/defi"
                  >
                    Defi
                  </Link>
                  <Link
                    className="focus:ring-blue flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-secondary focus:ring-2 dark:text-accent dark:hover:bg-secondary dark:hover:text-accent"
                    href="/categories/gaming"
                  >
                    Gaming
                  </Link>
                  <Link
                    className="focus:ring-blue flex items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-primary hover:bg-secondary focus:ring-2 dark:text-accent dark:hover:bg-secondary dark:hover:text-accent"
                    href="/categories/other"
                  >
                    Others
                  </Link>
                </div>
              </div>

              <Link
                className="font-medium text-secondary underline decoration-ter decoration-wavy hover:text-ter dark:text-accent dark:hover:text-ter md:py-6"
                href="/submit"
              >
                Submit
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
