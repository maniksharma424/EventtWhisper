import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  handleUpcommingEvents,
  handleCompletedEvents,
  sortObjectsByMonthAndDate,
} from "../helpers";
import { showUpcomming, showCompleted } from "../helpers";
import EventCard from "./EventCard";
import { monthNames } from "../constants/constants";
import {motion} from 'framer-motion'

const Events = () => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  const [eventType, setEventType] = useState({
    upcomming: true,
    completed: false,
  });

  const { events } = useSelector((state) => state.eventSlice);

  const date = new Date();
  useEffect(() => {
     
    const upcommingEvents = events?.filter(
      (event) => (parseInt(event.month) >= date.getMonth()) && (event.active === true)
    );
    setFilteredEvents(upcommingEvents);
  }, [events]);


  return (
    <div className="w-full h-full  sm:px-20 sm:py-10 px-5 py-2">
      <div className="sm:h-1/6 w-full ">
        <h1 className="text-[#141414] sm:text-[35px] text-[20px] sm:font-[600]">
          Events
        </h1>
        <p className="sm:text-[15px] sm:mt-0 mt-1 text-[10px] text-[#C7C6C6]">
          See your scheduled events from your calendar events links
        </p>
      </div>
      <div
        id="btns"
        className="sm:w-[250px] w-3/5 h-fit sm:mt-0 mt-3 flex py-2 px-1 justify-between bg-gray-100 rounded-lg sm:text-[18px] text-[13px] font-[500] shadow-md"
      >
        <motion.button
          onClick={() => {
            showUpcomming(eventType, setEventType);
            handleUpcommingEvents(events, setFilteredEvents, date);
          }}
          className={`px-2 py-1 mx-1 rounded-lg ${
            eventType.upcomming ? "bg-white" : "bg-gray-100 text-[#C7C6C6]"
          }`}
        >
          Upcomming
        </motion.button>
        <motion.button
          onClick={() => {
            showCompleted(eventType, setEventType);
            handleCompletedEvents(events, setFilteredEvents, date);
          }}
          className={`px-2 py-1 mx-1 rounded-lg ${
            eventType.completed ? "bg-white" : "bg-gray-100 text-[#C7C6C6]"
          }`}
        >
          Completed
        </motion.button>
     
      </div>

     {filteredEvents.length <=0 ? <div className="w-full sm:h-[400px] h-[300px] flex flex-col justify-center items-center sm:text-[35px] text-[22px] font-[200]">
      <p>  No event found  </p>
      <p >Go to calendar to get started</p>
     

     </div>:<div className="w-full h-fit">
        {sortObjectsByMonthAndDate(filteredEvents)?.map(
          (event, index, array) => {
            const currentMonth = parseInt(event.month);
            const previousMonth =
              index > 0 ? parseInt(array[index - 1].month) : null;
            if (previousMonth !== currentMonth) {
              const monthName = monthNames[currentMonth];
              return (
                <div className="mt-5" key={`month-${currentMonth}`}>
                  <h2 className="text-[#141414] sm:text-[20px] text-[15px] font-[600]">
                    {monthName}
                  </h2>
                  <EventCard index={index} key={index} event={event} />
                </div>
              );
            }
            return <EventCard index={index} key={index} event={event} />;
          }
        )}
      </div>}
    </div>
  );
};

export default Events;
