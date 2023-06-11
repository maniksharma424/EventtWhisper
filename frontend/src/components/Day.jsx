import { createPortal } from "react-dom";
import { useState } from "react";
import CreateEvent from "./CreateEvent";

import { useDispatch } from "react-redux";
import {
  changeOpacity,
  setBlur,
} from "../slices/dashboardSlice";
const Day = ({ day, currentDate, currentMonth, currentYear }) => {

  const [scheduleEvent, setScheduleEvent] = useState(false);

  const dispatch = useDispatch();
  return (
    <>
    <button
      onClick={(e) => {
        console.log("hi i was clicked");
        e.preventDefault();
        e.stopPropagation();
        dispatch(changeOpacity())
        dispatch(setBlur())
        setScheduleEvent((n) => !n);
      }}
      key={day}
      className={`sm:w-[173px] w-[59px] sm:h-36 h-16 text-center border-[1px] border-gray-200 flex justify-center ${
        day === currentDate.getDate() &&
        currentMonth === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
        ? "text-[#e3a34f]"
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
          setScheduleEvent(false)
        }}
        />,
        document.body
        )
        : null}
        </>
  );
};

export default Day;
