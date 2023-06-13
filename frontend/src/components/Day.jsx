import { createPortal } from "react-dom";
import { useState } from "react";
import CreateEvent from "./CreateEvent";

import { useDispatch } from "react-redux";
import { changeOpacity, setBlur } from "../slices/dashboardSlice";
import { useNavigate } from "react-router-dom";
const Day = ({ day, currentDate, currentMonth, currentYear }) => {
  const [scheduleEvent, setScheduleEvent] = useState(false);

  const isLoggedIn = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={(e) => {
          console.log("hi i was clicked");
          e.preventDefault();
          e.stopPropagation();

          isLoggedIn
            ? setScheduleEvent((n) => !n) &
              dispatch(changeOpacity()) &
              dispatch(setBlur())
            : navigate("/login");
        }}
        key={day}
        className={`sm:w-[173px] w-[59px] sm:h-36 h-16 text-center flex border-[1px] justify-center ${
          day === currentDate.getDate() &&
          currentMonth === currentDate.getMonth() &&
          currentYear === currentDate.getFullYear()
            ? "text-[#ff9d47]  border-t-[#3b3299] border-t-[2px]"
            : ""
        }`}
      >
        <span className="mt-2">{day}</span>
      </button>
      {scheduleEvent
        ? createPortal(
            <CreateEvent
              day={day}
              month={currentMonth}
              year={currentYear}
              hideEventSchdeuler={() => {
                setScheduleEvent(false);
              }}
            />,
            document.body
          )
        : null}
    </>
  );
};

export default Day;
