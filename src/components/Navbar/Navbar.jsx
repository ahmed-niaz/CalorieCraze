import search from "../../assets/icon/search.svg";
import profile from "../../assets/icon/profile.svg";
const Navbar = () => {
  return (
    <main className="mt-10">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-24"
            >
              <li className="text-xl">Home</li>
              <li className="text-xl">Recipe</li>
              <li className="text-xl">Menu</li>
              <li className="text-xl">About</li>
            </ul>
          </div>
          <a className="sm:text-2xl md:text-4xl font-bold md:font-extrabold">
            Recipe <span className="text-[#52b788] ">Craze</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10">
            <li className="text-xl font-semibold">Home</li>
            <li className="text-xl font-semibold">Recipe</li>
            <li className="text-xl font-semibold">Menu</li>
            <li className="text-xl font-semibold">About</li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn w-2/4 rounded-3xl md:flex  justify-start hidden">
            <img src={search} alt="" />
            <p className="text-xl">Search</p>
          </button>
          <div className="avatar placeholder ml-2">
            <div className="bg-green-400 text-neutral-content rounded-full w-8 md:w-12">
              <img src={profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
