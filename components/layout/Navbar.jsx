import Link from "next/link";
import Search from "./Search";
import { FaBagShopping, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className="bg-base-100 shadow-sm">
      <div className="navbar max-w-360 mx-auto gap-5 px-5">
        <div className="navbar-start w-auto">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Link href="/" className="text-xl">
            Pettoi
          </Link>
        </div>
        <div className="navbar-center flex-1">
          <Search />
        </div>
        <div className="navbar-end w-auto gap-5">
          <Link href="/login" className="max-md:hidden">
            <button className="btn btn-neutral btn-square">
              <FaUser className="size-4" />
            </button>
          </Link>
          <div className="indicator">
            <button className="btn btn-neutral btn-square">
              <span className="indicator-item badge badge-xs badge-secondary">
                0
              </span>
              <FaBagShopping className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
