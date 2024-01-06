import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="lg:px-20">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <li>
                <div className="form-control">
                  <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFAA33]" />
                  <input
                    type="text"
                    placeholder=" Search Audiobook"
                    className="input input-bordered md:w-auto flex j"
                  />
                </div>
              </li>
              <li>
                <a>Menu</a>
                <ul className="p-2 w-36">
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Home</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Details</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Category</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">
                      My Favourites
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Profile</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">
                      LogIn/SignUp
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h3 className="text-3xl font-bold">pti.</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="relative flex">
            <div className="relative">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFAA33]" />
              <input
                type="text"
                placeholder="Search Audiobook"
                className="pl-10 pr-4 py-3 border rounded-md w-[600px] "
              />
            </div>
          </div>
          <ul className="menu menu-horizontal px-1">
            <li className="bg-white rounded-lg">
              <details>
                <summary className="font-bold py-3">Menu</summary>
                <ul className="p-2 w-36">
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Home</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Details</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Category</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">
                      My Favourites
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">Profile</a>
                  </li>
                  <li>
                    <a className="text-black hover:text-[#FFAA33]">
                      LogIn/SignUp
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="p-4 rounded-full bg-orange-500">
            <LuUser2 className="text-2xl text-white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
