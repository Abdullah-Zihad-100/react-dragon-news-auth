import { NavLink } from "react-router-dom";
import userDefaultImg from "../assets/user.png";
const Navber = () => {
  const links = (
    <div className="flex flex-col lg:flex-row gap-5">
      <ul>
        <NavLink to="" className="text-gray-600">
          Home
        </NavLink>
      </ul>
      <ul>
        <NavLink className="text-gray-600" to="">
          About
        </NavLink>
      </ul>
      <ul>
        <NavLink className="text-gray-600" to="">
          Carrer
        </NavLink>
      </ul>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar me-2"
        >
          <div className="w-10 rounded-full">
            <img alt="" src={userDefaultImg} />
          </div>
        </div>
        <a className="rounded-none bg-[#403F3F] text-white px-8 py-1">Login</a>
      </div>
    </div>
  );
};

export default Navber;
