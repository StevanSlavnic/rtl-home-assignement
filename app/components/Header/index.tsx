"use client";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { selectNotFound } from "@/store/features/notFound/notFoundSelector";
import { useSelector } from "react-redux";

interface Route {
  name: string;
  href: string;
}

interface HeaderProps {
  routes: Route[];
}

const Header = ({ routes }: HeaderProps) => {
  const notFound = useSelector(selectNotFound());

  return (
    <header data-testid="header" className="sticky text-white ">
      <div className="flex p-4 justify-between items-center align-middle border-b border-gray-200">
        <Link href="/">
          <Logo />
        </Link>

        <div>
          <Link href="#" className="text-gray-400 hover:text-black py-1 px-2">
            Sign In
          </Link>
        </div>
      </div>
      {!notFound && (
        <nav>
          <ul className="flex gap-5 p-4 border-gray-200 border-b overflow-x-scroll">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="text-gray-400 hover:text-black"
              >
                {route.name}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
