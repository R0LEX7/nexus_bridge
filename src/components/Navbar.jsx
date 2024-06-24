import { useState, useEffect } from "react";

const navItems = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Services",
    path: "#service",
  },
  {
    name: "About",
    path: "#about_us",
  },
  {
    name: "Pricing",
    path: "#pricing",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setBgColor("bg-sky-800");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home">
      <nav
        className={`navbar fixed w-full z-20 top-0 start-0 border-b border-slate-600 transition-colors duration-300 ${bgColor}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              The Nexus Bridge
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-sky-800 dark:focus:ring-white"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              !open && "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${open ? "bg-sky-800" : ""}`}>
              {navItems.map((item, ind) => (
                <li
                  key={ind}
                  className="hover:border-b-2 border-cyan-500 px-2"
                >
                  <a
                    href={item.path}
                    className="block py-2 px-3 text-lg transition ease-in-out delay-150 hover:scale-110 duration-100 text-white md:hover:scale-110 md:p-0 md:dark:hover:bg-transparent"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
