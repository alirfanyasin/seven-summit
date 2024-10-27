import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed flex flex-wrap sm:justify-start sm:flex-nowrap w-full ${
        isScrolled ? "navbar-solid z-10" : "bg-transparent"
      } text-sm py-3`}
    >
      <nav className="container w-full mx-auto sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
            href={"/"}
            aria-label="Brand"
          >
            <img src={logo} alt="" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="relative flex items-center justify-center text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hs-collapse-toggle size-7 gap-x-2 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hidden hs-collapse-open:block shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link
              className="font-medium text-white focus:outline-none"
              to={"/"}
              aria-current="page"
            >
              Beranda
            </Link>
            <Link
              className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
              to={"/gunung"}
            >
              Gunung
            </Link>
            <Link
              className="font-medium text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
              to={"/perlengkapan"}
            >
              Perlengkapan
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
