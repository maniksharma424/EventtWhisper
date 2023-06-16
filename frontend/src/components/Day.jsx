import { createPortal } from "react-dom";
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { changeOpacity, setBlur } from "../slices/dashboardSlice";
import { useNavigate } from "react-router-dom";
const Day = ({ day, currentDate, currentMonth, currentYear, events }) => {
  const [scheduleEvent, setScheduleEvent] = useState(false);

  const isLoggedIn = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const date = new Date();
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          isLoggedIn ? null : navigate("/login");
          currentMonth >= date.getMonth()
            ? day >= date.getDate()
              ? setScheduleEvent((n) => !n) &
                dispatch(changeOpacity()) &
                dispatch(setBlur())
              : toast.error("Cannot set events for selected date")
            : toast.error("Cannot set events for selected date");
        }}
        key={day}
        className={`sm:w-[173px] w-[59px] sm:h-36 h-16 text-center flex border-[1px] justify-start items-center flex-col ${
          day === currentDate.getDate() &&
          currentMonth === currentDate.getMonth() &&
          currentYear === currentDate.getFullYear()
            ? "text-[#3b3299]  border-t-[#3b3299] border-t-[1px] sm:border-t-[2px]  font-[800]"
            : ""
        }`}
      >
        <span className="mt-2">{day}</span>
        <section className="h-fit w-full  overflow-scroll  flex flex-col justify-start items-start sm:p-2  p-1">
          {events?.map((event, index) => (
            <p
              key={index}
              className=" w-full  h-fit bg-green-100 sm:px-2 text-[#6e4d22] font-[500] sm:text-[14px] text-[5px] tracking-wide rounded-md flex justify-start items-center sm:my-[2px] px-1"
            >
              <span className="px-[2px] bg-green-500  h-5/6 rounded-md mr-1 "></span>{" "}
              <span className=" text-ellipsis overflow-hidden whitespace-nowrap">
                {event?.name}
              </span>
            </p>
          ))}
        </section>
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
