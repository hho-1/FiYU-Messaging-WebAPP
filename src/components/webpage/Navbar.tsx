"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectLogo from "../../../public/logo.svg";

export interface MenuItem {
  title: string;
  path?: string;
}

const menuItems: MenuItem[] = [
  { title: "New Group", path: "/newgroup" },
  { title: "Favorite Messages", path: "/favorite" },
  { title: "Settings", path: "/settings" },
  { title: "About", path: "/about" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-navbarColor text-sm px-4 flex items-center justify-between">
      <div className="flex items-center py-5 mr-4">
        <Image src={projectLogo} alt={"project-Logo"}></Image>
        <h3>FiYU</h3>
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <span>User Menu</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
            <Link href="/dashboard/profile" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
            </Link>
            <Link href="/dashboard/newgroup" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-gray-100">New Group</a>
            </Link>
            <Link href="/dashboard/mygroups" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-gray-100">My Groups</a>
            </Link>
            <Link href="/dashboard/settings" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            </Link>
            <Link href="/dashboard/signout" legacyBehavior>
              <a className="block px-4 py-2 hover:bg-gray-100">Sign Out</a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
