import React from "react";
import Link from "next/link";

export const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="navbar fixed top-0 left-0 right-0 z-50 border-none bg-base-300 bg-gradient-to-r from-red-500 to-green-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-5 w-52 bg-base-100 p-2 shadow-lg"
            >
              <li>
                <Link href="/project">Projects</Link>
              </li>
              <li tabIndex={0}>
                <Link href="/categories" className="justify-between">
                  Categories
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="rounded-none bg-base-100 p-2 ">
                  <li>
                    <Link href="/categories/nft">NFT</Link>
                  </li>
                  <li>
                    <Link href="/categories/gaming">Gaming</Link>
                  </li>
                  <li>
                    <Link href="/categories/defi">Defi</Link>
                  </li>
                  <li>
                    <Link href="/categories/other">Other</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/ranking">Rankings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            href="/"
            className="link-hover link text-xl normal-case decoration-primary decoration-wavy"
          >
            Shardeum Hub
          </Link>
        </div>
        <div className="navbar-end md:px-6 lg:px-6">
          <Link
            href="/submit"
            className=" link-hover link-neutral link flex decoration-zinc-700 decoration-wavy lg:ml-10"
          >
            Submit{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
