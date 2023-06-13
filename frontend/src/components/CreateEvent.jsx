import { monthNames } from "../constants/constants";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { defaultOpacity, removeBlur } from "../slices/dashboardSlice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAddEventMutation } from "../slices/eventApiSlice";
import { addEvent } from "../slices/eventsSlice";

const CreateEvent = ({ day, month, year, hideEventSchdeuler }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const [eventTime, setEventTime] = useState({
    hour: "03",
    minutes: "34",
    timeZone: "PM",
  });

  const [registerEvent, { isLoading }] = useAddEventMutation();
  const dispatch = useDispatch();

  const handleSubmitEventInfo = async () => {
    const event = {
      name: eventName.charAt(0).toUpperCase() + eventName.slice(1),
      description: eventDescription,
      day: `${day}`,
      month: `${month}`,
      year: `${year}`,
      hour: eventTime.hour,
      minutes: eventTime.minutes,
      timeZone: eventTime.timeZone,
      active:true
    };
    try {
      const res = await registerEvent({ event }).unwrap();
      dispatch(addEvent(event))
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="sm:w-[550px] sm:h-[600px] h-[450px] border-[1px] sm:shadow-2xl sm:rounded-lg absolute sm:top-[150px] sm:left-[450px] top-[130px] left-[40px] bg-white flex flex-col p-7 justify-around items-center ">
      <h1 className="sm:text-[25px] text-[20px] sm:font-[600] w-full flex justify-between items-center">
        Create Event
        <button
          className="font-[300] px-2 border-[1px] text-[15px] rounded-md shadow-sm"
          onClick={() => {
            dispatch(removeBlur());
            dispatch(defaultOpacity());
            hideEventSchdeuler();
          }}
        >
          x
        </button>
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
          <div className="sm:w-2/5 w-4/5 h-full">
            <p className="text-gray-600">Date</p>
            <span className="w-full flex justify-around sm:shadow-md items-center p-1 bg-gray-100 sm:rounded-lg">
              {`${day} ${monthNames[month]} ,${year}`}{" "}
              <button>
                <AiOutlineCalendar />
              </button>
            </span>
          </div>
          <div className="sm:w-2/5 w-4/5 h-full  ">
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

              <button>
                <BiTime />
              </button>
            </span>
          </div>
        </div>
        <p className="text-[10px] tracking-wider mt-1 text-gray-500">
          This event will take place on{" "}
          {`${day} ${monthNames[month]} ,${year}at ${eventTime.hour}:${eventTime.minutes}${eventTime.timeZone}  `}{" "}
        </p>
      </div>
      <div className="create-cancel-btns  w-full h-fit">
        <button
          className="border-[1px] w-full border-gray-500 px-4 py-1 rounded-2xl"
          onClick={() => {
            eventName === "" || eventDescription === ""
              ? toast.error("Enter event name and description to create alert")
              : handleSubmitEventInfo() &
                dispatch(removeBlur()) &
                dispatch(defaultOpacity()) &
                hideEventSchdeuler();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateEvent;
