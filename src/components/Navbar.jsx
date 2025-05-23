import { Link } from "react-router";
import logo from "../assets/devVerseLogo.png";

const Navbar = () => {
  const link = (
    <>
      <li className="text-lg font-medium hover:text-sky-600">
        <Link>Home</Link>
      </li>
      <li className="text-lg font-medium hover:text-sky-600">
        <Link>About</Link>
      </li>
      <li className="text-lg font-medium hover:text-sky-600">
        <Link>Projects</Link>
      </li>
      <li className="text-lg font-medium hover:text-sky-600">
        <Link>Skills</Link>
      </li>
      <li className="text-lg font-medium hover:text-sky-600">
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="bg-white shadow-sm py-2">
      <div className="navbar max-w-7xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex gap-2">
            <img className="w-10" src={logo} alt="logo" />
            <a className="text-xl/5 font-bold">
              Neamul<span className="text-sky-600">’</span>s <br /> DevVerse
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
