import { CgChevronDownO } from "react-icons/cg";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";
const Header = () => {
  const {userInfo} = useSelector(state=>state.auth)
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
          <motion.button>Home</motion.button>
          <motion.button>Get Started</motion.button>

          <motion.button className=" w-fit flex items-center">
            Products
            <CgChevronDownO />
          </motion.button>

          <motion.button>Calendar</motion.button>
          <motion.button className=" w-fit flex items-center">
            Applications
            <CgChevronDownO />
          </motion.button>
          <motion.button>Contact us</motion.button>
        </ul>
      </div>
      <div id="get started" className="sm:w-2/5 w-1/2 flex justify-end">
        <Link
          className="sm:text-[14px] text-[7px] sm:w-32  border-[1px] sm:px-4 sm:rounded-2xl px-3 sm:mr-4 sm:mx-0 mx-2 rounded-md font-[500] border-black flex justify-center items-center"
          to="/login"
        >
        {userInfo ? <span>Dashboard</span> : <span>Log in</span>}  
        </Link>
        <Link
          to="/dashboard"
          className="sm:text-[14px] text-[7px] sm:w-32 w-18  border-[1px] sm:px-4 sm:rounded-2xl px-3 sm:mx-0 mx-2 rounded-md font-[500] border-black bg-black text-white hover:bg-white hover:text-black flex justify-center items-center"
        >
        {userInfo ? <span>Profile</span>:<span>Try for free</span>}  
        </Link>
      </div>
    </div>
  );
};

export default Header;
