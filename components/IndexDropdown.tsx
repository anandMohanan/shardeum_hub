import React, { useRef } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="flex items-center px-3 py-4 text-xs font-bold uppercase text-blueGray-700 hover:text-blueGray-500 lg:py-2"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "z-50 float-left min-w-48 list-none rounded bg-white py-2 text-left text-base shadow-lg"
        }
      >
        <span
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        <Link
          href="/admin/dashboard"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/admin/settings"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Settings
        </Link>
        <Link
          href="/admin/tables"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Tables
        </Link>
        <Link
          href="/admin/maps"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Maps
        </Link>
        <div className="mx-4 my-2 h-0 border border-solid border-blueGray-100" />
        <span
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        <Link
          href="/auth/login"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Login
        </Link>
        <Link
          href="/auth/register"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Register
        </Link>
        <div className="mx-4 my-2 h-0 border border-solid border-blueGray-100" />
        <span
          className={
            "block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold text-blueGray-400"
          }
        >
          No Layout
        </span>
        <Link
          href="/landing"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Landing
        </Link>
        <Link
          href="/profile"
          className={
            "block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-blueGray-700"
          }
        >
          Profile
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
