import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import { weekdays, monthNames } from "../constants/constants";
import Day from "./Day";
const Calendar = () => {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

const {events} = useSelector(state=>state.eventSlice)
  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        const newYear = currentYear - 1;
        setCurrentYear(newYear);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        const newYear = currentYear + 1;
        setCurrentYear(newYear);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthDays = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, index) => {
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPreviousMonth = new Date(
      previousYear,
      previousMonth + 1,
      0
    ).getDate();
    return daysInPreviousMonth - (firstDayOfMonth - index - 1);
  });

  return (
    <div className="w-full sm:h-[1100px]  font-calendar">
      <div className="w-full sm:h-36 flex justify-center items-center">
        <h1 className="sm:text-[40px] text-[25px] sm:mt-0 mt-5 font-[500]">
          Calendar
        </h1>
      </div>
      <div
        id="calendar-bar"
        className=" w-full sm:py-2 py-1 flex justify-between items-center"
      >
        <div className="sm:w-1/3 w-2/3 h-full flex justify-center text-[13px] sm:text-[20px] font-[600]">
          <h2 className="sm:w-1/3 w-1/2">
            {`${monthNames[currentMonth]}  ${currentYear}`}
          </h2>
          <button
            className="px-1 sm:ml-5  text-gray-600 "
            onClick={goToPreviousMonth}
          >
            <BiChevronLeft />
          </button>
          <button>
            <BsDot />
          </button>
          <button className="px-1  text-gray-600 " onClick={goToNextMonth}>
            <BiChevronRight />
          </button>
        </div>
        <div
          id="total-notifications"
          className="sm:w-1/4 w-1/3 h-12 flex justify-center py-2 sm:text-[18px] text-[12px]  "
        >
          <button className="flex justify-between items-center sm:w-1/5 w-2/5 border-[1px] sm:rounded-3xl rounded-xl px-2 h-full text-gray-700">
            <BiBell className="text-[#e3a34f] border-[1px] rounded-md border-[#3b3299]" />
            {events.length}
          </button>
        </div>
      </div>
      <ul
        id="calendar-days"
        className="flex  justify-between mt-4 sm:px-28  w-full"
      >
        {weekdays?.map((day) => (
          <li key={day} className="w-1/6 text-center ">
            {day}
          </li>
        ))}
      </ul>
      <ul
        id="calendar-dates"
        className="flex flex-wrap  h-fit mt-4 sm:px-28 font-[600] "
      >
        {emptyDays?.map((day) => (
          <li
            key={`previous_${day}`}
            className="sm:w-[173px] w-[59px] sm:h-36 h-16 flex justify-center text-center border-[1px] border-gray-200 text-gray-300"
          >
            <span className="mt-2">{day}</span>
          </li>
        ))}
        {monthDays?.map((day) => (
          <Day
          key={day}
            day={day}
            currentDate={currentDate}
            currentMonth={currentMonth}
            currentYear={currentYear}
          />
        ))}
      </ul>
      <div className="w-full flex justify-center items-center mt-10 font-[800]">
        &copy; MYCAL 2023
      </div>
    </div>
  );
};
export default Calendar;
