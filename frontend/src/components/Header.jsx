import { CgChevronDownO } from "react-icons/cg";

const Header = () => {
  return (
    <div className="sm:px-14 sm:py-3 px-8 py-2 w-full border-b-[1px]  border-black flex justify-between">
      <div className="sm:w-3/5 w-1/2 flex">
        <div id="logo" className="flex   justify-between items-center  ">
          <img
            className="sm:w-10 w-5 sm:h-10 h-5 rotate-90"
            src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            alt="logo"
          />
        </div>
        <ul className="text-[12px] flex-wrap hidden  sm:flex justify-around items-center w-3/5 ">
          <button>Home</button>
          <button>Get Started</button>

          <button className=" w-fit flex items-center">
            Products
            <CgChevronDownO />
          </button>

          <button>Calendar</button>
          <button className=" w-fit flex items-center">
            Applications
            <CgChevronDownO />
          </button>
          <button>Contact us</button>
        </ul>
      </div>
      <div id="get started" className="sm:w-2/5 w-1/2 flex justify-end">
        <button className="sm:text-[14px] text-[7px] sm:w-32  border-[1px] sm:px-4 sm:rounded-2xl px-3 sm:mr-4 sm:mx-0 mx-2 rounded-md font-[500] border-black ">
          Log in
        </button>
        <button className="sm:text-[14px] text-[7px] sm:w-32 w-18  border-[1px] sm:px-4 sm:rounded-2xl px-3 sm:mx-0 mx-2 rounded-md font-[500] border-black bg-black text-white hover:bg-white hover:text-black ">
          Try for free{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
