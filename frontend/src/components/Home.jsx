import { LuPauseCircle } from "react-icons/lu";
import { FaStopCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MICROSOFT_IMG, PAYPAL_IMG, ZOOM_IMG } from "../constants/constants";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";
const Home = () => {
  const {userInfo} = useSelector(state=>state.auth)

  return (
    <div id="body" className="sm:p-12 p-8 h-[800px] w-full">
      <div id="upper" className="h-1/2 w-full  flex flex-wrap">
        <div className="w-1/2 h-full text-[30px] sm:text-[70px] font-[700]">
          <p>Keep your reminders</p>
          <p>organised in just</p>
          <p>one application</p>
          <p className="sm:text-[15px] text-[10px] text-gray-400 font-[200]">
            Create events and receive WhatsApp notifications. Simplify event
            management with our intuitive web app.
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col sm:justify-evenly justify-start items-end">
          <div className="sm:h-2/5 h-1/4 sm:mt-0 mt-4 sm:w-1/2 w-full border-[1px]  border-black rounded-3xl bg-[#c599f2] flex ">
            <div className="w-1/2 h-full px-4 py-3 flex flex-col items-start justify-between">
              <p className=" text-gray-700 sm:text-[10px] text-[6px]">
                AMAZON PROJECT
              </p>
              <p className=" sm:text-[13px] text-[9px] ">
                Architecture Analysis
              </p>
              <div className="w-2/3 sm:h-1/2 h-1/4 sm:rounded-2xl rounded-md  border-[1px] border-black flex justify-around items-center sm:text-[40px] text-[25px] bg-black text-white">
                <LuPauseCircle />
                <FaStopCircle />
              </div>
            </div>
            <div className="w-1/2 h-full px-4 py-3 flex flex-col items-end justify-between ">
              <p className=" text-gray-700 sm:text-[10px] text-[6px]">
                TUE 30 AUG
              </p>
              <p className="sm:text-[45px] text-[15px] mt-6">1:39:47</p>
            </div>
          </div>
          <div className="sm:h-2/5 h-1/4 sm:w-1/2 sm:mt-0 mt-10 w-full border-[1px] bg-[#4551d1] border-black rounded-3xl flex ">
            <div className="w-2/3 h-full px-4 py-3 flex flex-col items-start justify-between  ">
              <p className=" text-gray-300 sm:text-[10px] text-[6px]">
                Profile
              </p>
              <p className=" sm:text-[13px] text-[10px] text-white ">
                Leonard Lauren
              </p>
              <p className="sm:text-[10px] text-[6px] text-gray-300">
                <span>Tasks</span> <span className="sm:ml-5">Completed</span>
              </p>
              <p className="sm:text-[13px] text-[10px] text-white">
                <span>30</span> <span className="sm:ml-8">18</span>
              </p>
            </div>
            <div className="w-1/3 h-full flex justify-center items-center ">
              <Avatar
                size={window.innerWidth < 500 ? 35 : 70}
                round="40px"
                githubHandle="Jaibles"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="lower" className="w-full h-1/2 flex flex-wrap">
        <div className="sm:w-1/2 w-full sm:h-full h-1/2  flex flex-col justify-around items-start">
          <div
            id="get-Started-btns"
            className="w-1/2 h-1/3 flex justify-between items-center"
          >
            <Link to='/dashboard' className="text-white sm:px-12 px-3  sm:h-[50px] h-[25px] sm:rounded-3xl sm:text-[12px] text-[10px] rounded-lg border-black bg-black border-[1px] flex justify-center items-center">
            {userInfo?.name ? <span>Calendar</span>:<span>Try for free</span>}  
            </Link>
            <Link className=" sm:px-12 px-3  sm:h-[50px] h-[25px] sm:rounded-3xl sm:text-[12px] text-[10px] rounded-lg border-black bg-[#c599f2] border-[1px] text-black flex justify-center items-center">
              Learn more
            </Link>
          </div>
          <div
            id="trusted-by"
            className=" sm:w-1/2 w-full h-1/3 font-mono  text-[13px]"
          >
            <p>Trusted by the greatest</p>
            <div
              id="images"
              className="flex border-t-[1px] mt-3 border-black flex-wrap justify-between items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stripe_logo%2C_revised_2014.png/1200px-Stripe_logo%2C_revised_2014.png"
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src={PAYPAL_IMG}
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src="https://media.zenfs.com/en/evening_standard_239/9e5753b6db6eb18067e1438775f6b0be"
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src={MICROSOFT_IMG}
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src="https://uizard.io/static/logo-pinterest-a37bc5bc8d57fb7db689c04aea0baaa2.png"
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src={ZOOM_IMG}
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src="https://i.pinimg.com/originals/af/5b/7f/af5b7fa2209bcc7a292823cb213f5e9d.png"
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2021/10/Lexus-Logo.png"
                alt="stripe"
                className="sm:w-[70px] w-[35px] h-1/4"
              />
            </div>
          </div>
          <div
            id="feature-btns"
            className="w-full h-1/3 flex  sm:justify-between justify-evenly items-center"
          >
            <motion.button className="border-[1px] border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300]">
              {" "}
              <input type="radio" className="sm:w-3 w-1 sm:h-3 h-1" />{" "}
              Experience the app
            </motion.button>
            <motion.button className="border-[1px] border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300]">
              {" "}
              <input type="radio" className="sm:w-3 w-1 sm:h-3 h-1" /> Unlock
              event management
            </motion.button>
            <motion.button className="border-[1px] border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300]">
              {" "}
              <input type="radio" className="sm:w-3 w-1 sm:h-3 h-1" /> Schedule
              with ease
            </motion.button>
          </div>
        </div>

        <div className=" sm:w-1/2 w-full  sm:h-full h-1/2 ">
          <div className="w-full h-2/3 border-[1px] border-black rounded-r-[45px] flex ">
            <div className="w-1/3 h-full  bg-black sm:p-4 p-2 flex flex-col items-start justify-evenly font-[200] sm:text-[14px] text-[7px]">
              <motion.button className="bg-[#27c22c] sm:px-3 px-1 py-1 rounded-xl">
                Reminders
              </motion.button>
              <p className="text-white">
                {" "}
                <input
                  className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                  type="radio"
                />{" "}
                Update Components
              </p>
              <p className="text-white border-y-[0.5px] sm:py-3 py-1  border-white">
                {" "}
                <input
                  className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                  type="radio"
                />{" "}
                Platform Login Flow
              </p>
              <p className="text-white">
                {" "}
                <input
                  className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                  type="radio"
                />{" "}
                Micro Interactions
              </p>
            </div>
            <div className="w-2/3 h-full  relative right-10 sm:right-16 bg-white  sm:rounded-l-[50px] rounded-l-[30px] sm:p-4 p-2 flex flex-col items-start justify-evenly font-[300] sm:text-[14px] text-[7px]">
              <div className="w-full flex justify-between">
                <motion.button className="px-3 bg-[#c599f2] rounded-2xl py-1">
                  Assigned
                </motion.button>
                <motion.button className="px-3 bg-gray-200 text-gray-600 rounded-2xl py-1">
                  3 Tasks
                </motion.button>
              </div>
              <p className="w-full flex justify-between">
                <span>
                  <input
                    className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                    type="radio"
                  />
                  Design systems
                </span>{" "}
                <span>
                  1:12:50{" "}
                  <Avatar
                    className="sm:relative  left-1"
                    githubHandle="maniksharma424"
                    size={window.innerWidth < 500 ? 10 : 30}
                    round="20px"
                  />
                  <Avatar
                    githubHandle="arjunbharti"
                    size={window.innerWidth < 500 ? 10 : 30}
                    round="20px"
                  />
                </span>
              </p>
              <p className="sm:py-2 py-1 w-full flex justify-between border-y-[1px] border-gray-300">
                <span>
                  <input
                    className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                    type="radio"
                  />{" "}
                  Platform structure
                </span>{" "}
                <span>
                  2:55:60{" "}
                  <Avatar
                    githubHandle="sitebase"
                    size={window.innerWidth < 500 ? 10 : 30}
                    round="20px"
                  />
                </span>
              </p>
              <p className="w-full flex justify-between">
                {" "}
                <span>
                  <input
                    className="sm:mx-2 mx-1 sm:w-3 sm:h-3 w-1 h-1"
                    type="radio"
                  />{" "}
                  Design review
                </span>{" "}
                <span>
                  4:62:30{" "}
                  <Avatar
                    githubHandle="PeerRich"
                    size={window.innerWidth < 500 ? 10 : 30}
                    round="20px"
                  />
                </span>
              </p>
            </div>
          </div>

          <div
            id="feature-btns"
            className="w-full h-1/3 flex justify-evenly items-center"
          >
            <motion.button className="border-[1px] border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300] bg-[#c599f2]">
              {" "}
              <input type="radio" className="sm:w-3 w-1 sm:h-3 h-1" /> Try it
              now
            </motion.button>
            <motion.button className="border-[1px] border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300]  bg-[#4551d1] text-white">
              {" "}
              <input type="radio" className="sm:w-3 w-1 sm:h-3 h-1" /> Stay
              organized
            </motion.button>
            <motion.button className="border-[1px]   border-black h-1/3 text-[6px] sm:text-[15px] px-1 sm:px-4 font-[300] flex  items-center bg-[#27c22c]">
              {" "}
              <IoIosAddCircleOutline className="text-white bg-black mx-2 rounded-full" />{" "}
              Experience seamless planning
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
