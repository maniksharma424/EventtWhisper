import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";

const EventCard = ({ event, index }) => {
  const [edit, setEdit] = useState(false);
  const {
    day,
    month,
    year,
    hour,
    minutes,
    timeZone,
    name,
    description,
    active,
  } = event;

  const date = new Date(year, month - 1, day);
  const options = { weekday: "long" };
  const dayName = date.toLocaleString("en-US", options);

  return (
    <div className="sm:w-5/6 h-fit border-[1px] mt-5 sm:px-3 py-1 rounded-md shadow-md ">
      <div id="event-details" className="w-full h-full flex text-[#4D4D4D] ">
        <div
          id="info"
          className="sm:w-1/2 w-3/4 h-full flex justify-start items-center py-1"
        >
        {active ?  <p className="bg-green-700 sm:p-1 p-[2px] rounded-lg sm:ml-0 ml-2"></p> :<p className="bg-red-800 sm:p-1 p-[2px] rounded-lg sm:ml-0 ml-2"></p> }
          <div
            id="date"
            className={`w-1/4 sm:font-[600] font-[400] h-full flex flex-col border-r-[1px] justify-center items-center ${
              index === 0 || index === 1 ? "text-[#E55807]" : null
            }`}
          >
            <p className="sm:text-[13px] text-[10px]">{dayName.slice(0, 3)}</p>
            <p className="sm:text-[28px] text-[20px] ">{day}</p>
          </div>

          <div
            id="time"
            className="w-1/4 h-full flex flex-col justify-center  items-start  px-2  "
          >
            <p className="flex justify-center items-center sm:mb-3 sm:text-[13px] text-[8px]">
              {" "}
              <span>
                <AiOutlineClockCircle />
              </span>{" "}
              <span className="mx-1">
                {hour}:{minutes}:{timeZone}
              </span>
            </p>
            <p className="flex justify-center items-center sm:text-[13px] text-[8px] mt-2">
              <span>
                <CiLocationOn />
              </span>
              <span className="mx-1  ">Online</span>
            </p>
          </div>
          <div
            id="
        name-description"
            className=" flex flex-col w-2/4 justify-start items-center "
          >
            <p className="sm:text-[17px] text-[12px]">{name}</p>
            <p className="text-gray-500 sm:text-[12px] text-[8px] sm:mt-3 mt-1">
              {description}
            </p>
          </div>
        </div>
        <div id="edit" className="w-1/2  flex justify-end items-center sm:p-0 p-2">
          <button
            onClick={() => {
              setEdit((n) => !n);
            }}
            className="border-[1px] sm:text-[14px] text-[12px] sm:px-5 px-2 sm:rounded-md rounded-md bg-gray-100 sm:py-2 py-1 flex justify-evenly items-center hover:text-white hover:bg-[#2B2730] sm:font-[600]"
          >
            Edit  {edit ? <FiChevronUp className="sm:ml-3"/>:<FiChevronDown className="sm:ml-3" />}
          </button>
        </div>
      </div>
      {edit ? 
      <div  className="w-full flex sm:flex-row flex-col justify-start items-center p-4">
            <EditEvent
            event={event}
            hideEventEditor={()=>{
              setEdit(false)
            }}
            />
      </div>
    
      :null}
    </div>
  );
};

export default EventCard;
