import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BsCalendar2Week } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { ImPriceTags } from "react-icons/im";
import { VscFeedback } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import Avatar from "react-avatar";
import { useState } from "react";
import Calendar from "./Calendar";
import Profile from "./Profile";
import Pricing from "./Pricing";
import FeedBack from "./FeedBack";
import Events from "./Events";
const Dashboard = () => {
  const [showWidget, setShowWidget] = useState({
    isCalendar: true,
    isEvents: false,
    isFeedback: false,
    isPricing: false,
    isProfile: false,
  });

  return (
    <>
      <div className=" w-full h-[820px] ">
        <div
          id="header"
          className="w-full h-16 border-b-[1px] border-gray-300 flex "
        >
          <div
            id="logo"
            className="w-1/6 h-full  sm:flex hidden justify-center items-center flex-col"
          >
            <div className="w-1/6 h-1/3 bg-gray-100  rounded-t-full"></div>
            <div className="w-1/6 h-1/3  rounded-b-full bg-[#3b3299]"></div>
          </div>
          <div
            id="widgets"
            className="sm:w-3/6 w-5/6 h-full  flex justify-between items-center sm:text-[13px] text-[8px]  text-gray-400 font-[500]"
          >
            <button
              onClick={() => {
                setShowWidget({
                  isCalendar: false,
                  isProfile: false,
                  isFeedback: false,
                  isPricing: false,
                  isEvents: true,
                });
              }}
              className={`flex justify-center items-center h-full w-1/5 ${showWidget.isEvents ? "text-[#3b3299]" : ""}`}

            >
              <MdOutlineDashboardCustomize className={`sm:mr-2 mr-1 ${showWidget.isEvents ? "text-[#e3a34f]" : null}`} /> Events
            </button>
            <button
              onClick={() => {
                setShowWidget({
                  isCalendar: true,
                  isProfile: false,
                  isFeedback: false,
                  isPricing: false,
                  isEvents: false,
                });
              }}
              className={`flex justify-center items-center h-full w-1/5 ${showWidget.isCalendar ? "text-[#3b3299]" : ""}`}

            >
              <BsCalendar2Week className={`sm:mr-2 mr-1 ${showWidget.isCalendar ? "text-[#e3a34f]" : null}`} /> Calendar
            </button>
            <button
              onClick={() => {
                setShowWidget({
                  isCalendar: false,
                  isProfile: true,
                  isFeedback: false,
                  isPricing: false,
                  isEvents: false,
                });
              }}
              className={`flex justify-center items-center h-full w-1/5 ${showWidget.isProfile ? "text-[#3b3299]" : ""}`}

            >
              <CgProfile className={`sm:mr-2 mr-1 sm:text-[15px] ${showWidget.isProfile ? "text-[#e3a34f]" : null}`} /> Profile
            </button>
            <button
              onClick={() => {
                setShowWidget({
                  isCalendar: false,
                  isProfile: false,
                  isFeedback: false,
                  isPricing: true,
                  isEvents: false,
                });
              }}
              className={`flex justify-center items-center h-full w-1/5 ${showWidget.isPricing ? "text-[#3b3299]" : ""}`}

            >
              <ImPriceTags className={`sm:mr-2 mr-1 sm:text-[15px] ${showWidget.isPricing ? "text-[#e3a34f]" : null}`}/> Pricing
            </button>
            <button
              onClick={() => {
                setShowWidget({
                  isCalendar: false,
                  isProfile: false,
                  isFeedback: true,
                  isPricing: false,
                  isEvents: false,
                });
              }}
              className={`flex justify-center items-center h-full w-1/5 ${showWidget.isFeedback ? "text-[#3b3299]" : ""}`}

            >
              <VscFeedback className={`sm:mr-2 mr-1 sm:text-[15px] ${showWidget.isFeedback ? "text-[#e3a34f]" : null}`} /> Feedback
            </button>
          </div>
          <div
            id="profile"
            className="sm:w-2/6   h-full  text-gray-400 flex justify-end items-center sm:text-[13px] text-[8px] font-[500]"
          >
            <button className="sm:flex hidden justify-center items-center sm:mr-24 mr-5 h-full w-1/6 ">
              <MdWidgets className="sm:mr-2 " /> Widgets
            </button>

            <button className="sm:text-[15px] sm:mr-20 sm:ml-0 ml-5">
              <Avatar
                githubHandle="sitebase"
                size={window.innerWidth < 500 ? 15 : 30}
                round="20px"
              />
            </button>
          </div>
        </div>
        {showWidget.isEvents ? <Events /> : null}
        {showWidget.isCalendar ? <Calendar /> : null}
        {showWidget.isProfile ? <Profile /> : null}
        {showWidget.isPricing ? <Pricing /> : null}
        {showWidget.isFeedback ? <FeedBack /> : null}
      </div>
    </>
  );
};

export default Dashboard;
