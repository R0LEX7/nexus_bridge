import { FaAnglesDown } from "react-icons/fa6";



const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover w-full h-screen bg-no-repeat  bg-[url('https://iuk.ktn-uk.org/wp-content/uploads/2021/01/AdobeStock_375393450-scaled-e1611136805546.jpeg')] bg-gray-700 bg-blend-multiply"
    >
      <div className="px-4 mx-auto h-full max-w-screen-xl text-center mt-18 lg:py-56  pt-12">
        <div className="mt-64 lg:mt-52 md:mt-52">
          <h1 className="mb-4 mt-18 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#pricing"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-800 hover:bg-sky-700 "
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>

          </div>
          <button  onClick={(() => {window.scroll(0,700)})}
            className="inline-flex mt-6 animate-bounce justify-center  items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-full w-14 h-14 border  hover:border-none  border-white hover:bg-sky-700 "><FaAnglesDown/></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
