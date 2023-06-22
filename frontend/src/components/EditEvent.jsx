import { monthNames } from "../constants/constants";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {useDeleteEventMutation,useUpdateEventMutation,
} from "../slices/eventApiSlice";
import { deleteEvent, updateEvent } from "../slices/eventsSlice";
import {motion} from 'framer-motion'

const EditEvent = ({ event, hideEventEditor }) => {
  const {day,month,year,hour,minutes,timeZone, name,description, active,_id} = event;
  const [eventName, setEventName] = useState(name);
  const [eventDescription, setEventDescription] = useState(description);

  const [eventTime, setEventTime] = useState({
    hour: hour,
    minutes: minutes,
    timeZone: timeZone,
  });

const dispatch = useDispatch();

const [updateEventApi] = useUpdateEventMutation();

const [deleteEventApi] = useDeleteEventMutation();

  const handleUpdateEvent = async () => {
    const event = {
      name: eventName.charAt(0).toUpperCase() + eventName.slice(1),
      description: eventDescription,
      day: `${day}`,
      month: `${month}`,
      year: `${year}`,
      hour: eventTime.hour,
      minutes: eventTime.minutes,
      timeZone: eventTime.timeZone,
      active: true,
      _id: _id,
    };
    try {
    const res = await updateEventApi(event).unwrap();
    dispatch(updateEvent(event));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleDeleteEvent = async () => {
    try {
      const res = await deleteEventApi({ _id: _id }).unwrap();
      dispatch(deleteEvent(event));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };



  return (
    <>
      <div className="sm:w-3/5 w-full sm:h-[500px] h-[250px] sm:rounded-lg  bg-white flex flex-col sm:p-7  justify-around items-center sm:drop-shadow-md ">
        <h1 className="sm:text-[25px] text-[20px] sm:font-[600] w-full flex justify-between items-center">
          Edit Event
          {active ? (
            <p className="flex justify-center items-center text-[10px] text-green-700">
              <span className="bg-green-700 p-1 rounded-lg"></span>
              <span className="sm:text-[14px] ml-1">Active</span>
            </p>
          ) : (
            <p className="flex justify-center items-center text-[10px] text-red-700">
              <span className="bg-red-700 p-1 rounded-lg"></span>
              <span className="sm:text-[14px] ml-1">Not active</span>
            </p>
          )}
        </h1>
        <div className="h-1/6 w-full sm:text-[15px] text-[12px]  flex flex-col justify-around">
          <p className="text-gray-600">Event Name </p>
          <input
            type="text"
            value={eventName}
            onChange={(e) => {
              setEventName(e.target.value);
            }}
            className=" w-full border-[1px] bg-gray-100  sm:font-[300] sm:p-2 p-1 sm:shadow-md rounded-md "
            placeholder="Enter event name"
          />
        </div>
        <div className="h-1/4 w-full  flex flex-col justify-around sm:text-[15px] text-[12px]">
          <p className="text-gray-600">Description </p>
          <textarea
            value={eventDescription}
            onChange={(e) => {
              setEventDescription(e.target.value);
            }}
            type="text"
            className=" w-full h-3/5 border-[1px] bg-gray-100 sm:font-[300] sm:p-2 p-1 sm:shadow-md rounded-md  "
            placeholder="Enter event description"
          />
        </div>
        <div
          id="date-time"
          className="h-fit w-full flex flex-col justify-between items-start sm:text-[15px] text-[10px] "
        >
          <div className="h-fit w-full flex  justify-between items-center ">
            <div className="sm:w-2/5 w-2/5 h-full">
              <p className="text-gray-600">Date</p>
              <span className="w-full flex justify-around sm:shadow-md items-center p-1 bg-gray-100 sm:rounded-lg">
                {`${day} ${monthNames[month]} ,${year}`}{" "}
                <motion.button>
                  <AiOutlineCalendar />
                </motion.button>
              </span>
            </div>
            <div className="sm:w-2/5 w-2/5 h-full  ">
              <p className="text-gray-600">Time</p>
              <span className="w-full flex justify-around sm:shadow-md items-center p-1 bg-gray-100 sm:rounded-lg">
                <select
                  value={eventTime.hour}
                  onChange={(e) => {
                    setEventTime({
                      hour: e.target.value,
                      minutes: eventTime.minutes,
                      timeZone: eventTime.timeZone,
                    });
                  }}
                  className="form-select w-1/4 sm:rounded-md  "
                  defaultValue="1"
                >
                  {Array.from({ length: 12 }, (_, index) => {
                    const hour = (index + 1).toString().padStart(2, "0");
                    return (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    );
                  })}
                </select>
                <span>:</span>
                <select
                  value={eventTime.minutes}
                  onChange={(e) => {
                    setEventTime({
                      hour: eventTime.hour,
                      minutes: e.target.value,
                      timeZone: eventTime.timeZone,
                    });
                  }}
                  className="form-select w-1/4 sm:rounded-md  "
                  defaultValue="00"
                >
                  {Array.from({ length: 60 }, (_, index) => {
                    const minute = index.toString().padStart(2, "0");
                    return (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    );
                  })}
                </select>
                <select
                  value={eventTime.timeZone}
                  onChange={(e) => {
                    setEventTime({
                      hour: eventTime.hour,
                      minutes: eventTime.minutes,
                      timeZone: e.target.value,
                    });
                  }}
                  className="form-select w-1/4 sm:rounded-md  "
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>

                <motion.button>
                  <BiTime />
                </motion.button>
              </span>
            </div>
          </div>
          <p className="text-[10px] tracking-wider mt-1 text-gray-500">
            This event will take place on{" "}
            {`${day} ${monthNames[month]} ,${year}at ${eventTime.hour}:${eventTime.minutes}${eventTime.timeZone}  `}{" "}
          </p>
        </div>
      </div>
      <div className="sm:w-2/5 w-full sm:h-[300px]  flex sm:flex-col justify-around items-center sm:text-[18px] text-[10px]">
        <motion.button
          className="shadow-xl border-[1px] sm:w-2/5 border-gray-500 sm:px-4 px-2 py-1 rounded-md sm:hover:hover:bg-[#2B2730]  sm:hover:text-white"
          onClick={() => {
            eventName === "" || eventDescription === ""
              ? toast.error("Enter event name and description to create alert")
              : handleUpdateEvent() & hideEventEditor();
          }}
        >
          Update
        </motion.button>

        <motion.button
          className="shadow-xl border-[1px] sm:w-2/5 border-gray-500 sm:px-4 px-2 py-1 rounded-md sm:hover:hover:bg-[#2B2730]  sm:hover:text-white"
          onClick={() => {
            eventName === "" || eventDescription === ""
              ? toast.error("Enter event name and description to create alert")
              : hideEventEditor() & handleDeleteEvent();
          }}
        >
          Delete Event
        </motion.button>

        <motion.button
          className="shadow-xl border-[1px] sm:w-2/5 border-gray-500 sm:px-4 px-2 py-1 rounded-md sm:hover:hover:bg-[#2B2730]  sm:hover:text-white"
          onClick={() => {
            eventName === "" || eventDescription === ""
              ? toast.error("Enter event name and description to create alert")
              : hideEventEditor();
          }}
        >
          Cancel
        </motion.button>
      </div>
    </>
  );
};

export default EditEvent;
