import React from "react";
import Logo from "../Logo";
import Link from "next/link";

interface Route {
  name: string;
  href: string;
}

interface HeaderProps {
  routes: Route[];
}

const Header = ({ routes }: HeaderProps) => {
  return (
    <header data-testid="header" className="sticky text-white ">
      <div className="flex justify-between items-center align-middle border-b border-gray-200 p-4">
        <div>
          <Logo />
        </div>
        <div>
          <Link href="#" className="text-gray-400 py-1 px-2">
            Sign In
          </Link>
        </div>
      </div>
      <nav>
        <ul className="flex gap-5 p-4 text-gray-400 border-gray-200 border-b">
          {routes.map((route) => (
            <Link key={route.name} href={route.href}>
              {route.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
