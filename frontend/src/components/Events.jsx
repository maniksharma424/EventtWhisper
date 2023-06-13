import { useState, useEffect } from "react";
import {
  handleUpcommingEvents,
  handleCancelledEvents,
  handleCompletedEvents,
} from "../helpers";
import { showUpcomming, showCompleted, showCancelled } from "../helpers";
import EventCard from "./EventCard";
const Events = () => {

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const [eventType, setEventType] = useState({
    upcomming: true,
    completed: false,
    cancelled: false,
  });

  const date = new Date();
  useEffect(() => {
    const getEvents = async () => {
      fetch("/api/users/events")
        .then((res) => res.json())
        .then((res) => {
          const upcommingEvents = res.events.filter(
            (event) =>
              parseInt(event.day) >= date.getDate() &&
              parseInt(event.month) >= date.getMonth()
          );
            setEvents(res?.events)
          setFilteredEvents(upcommingEvents);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    getEvents();
  }, []);
  console.log(events);
  console.log(date.getDate());

  return (
    <div className="w-full h-full  sm:px-20 sm:py-10 px-2 py-2">
      <div className="sm:h-1/6 w-full ">
        <h1 className="text-[#141414] sm:text-[35px] text-[20px] sm:font-[600]">
          Events
        </h1>
        <p className="sm:text-[15px] text-[10px] text-[#C7C6C6]">
          See your scheduled events from your calendar events links
        </p>
      </div>
      <div
        id="btns"
        className="sm:w-[350px] w-full h-fit  flex py-2 px-1 justify-between bg-gray-100 rounded-lg sm:text-[18px] text-[13px] font-[500] shadow-md"
      >
        <button
          onClick={() => {
            showUpcomming(eventType, setEventType);
            handleUpcommingEvents(events, setFilteredEvents, date);
          }}
          className={`px-2 py-1 mx-1 rounded-lg ${
            eventType.upcomming ? "bg-white" : "bg-gray-100 text-[#C7C6C6]"
          }`}
        >
          Upcomming
        </button>
        <button
          onClick={() => {
            showCompleted(eventType, setEventType);
            handleCompletedEvents(events, setFilteredEvents, date);
          }}
          className={`px-2 py-1 mx-1 rounded-lg ${
            eventType.completed ? "bg-white" : "bg-gray-100 text-[#C7C6C6]"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => {
            showCancelled(eventType, setEventType);
            handleCancelledEvents(events, setFilteredEvents);
          }}
          className={`px-2 py-1 mx-1 rounded-lg ${
            eventType.cancelled ? "bg-white" : "bg-gray-100 text-[#C7C6C6]"
          }`}
        >
          Cancelled
        </button>
      </div>
      <div className="w-full h-fit">
      {filteredEvents?.map((event,index)=><EventCard key={index} event={event}/>)}
      </div>
    </div>
  );
};

export default Events;
