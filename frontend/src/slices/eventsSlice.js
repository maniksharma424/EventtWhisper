import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "eventSlice",
  initialState: {
    events: [],
  },

  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action) => {
      state.events.filter((event) => event._id !== action.payload._id);
    },
    updateEvent: (state, action) => {
      const eventIndex = state.events.findIndex((item) =>
        item._id.equals(action.payload._id)
      );
      if (eventIndex === -1) {
        throw new Error("Event not found");
      }
      // Update the event properties

      const { day, month, year, hour, minutes, timeZone, name, description } =
        action.payload;
      state.events[eventIndex].day = day || state.events[eventIndex].day;
      state.events[eventIndex].month = month || state.events[eventIndex].month;
      state.events[eventIndex].year = year || state.events[eventIndex].year;
      state.events[eventIndex].hour = hour || state.events[eventIndex].hour;
      state.events[eventIndex].minutes =
        minutes || state.events[eventIndex].minutes;
      state.events[eventIndex].timeZone =
        timeZone || state.events[eventIndex].timeZone;
      state.events[eventIndex].name = name || state.events[eventIndex].name;
      state.events[eventIndex].description =
        description || state.events[eventIndex].description;
    },
  },
});
export default eventsSlice.reducer;
export const { setEvents, addEvent, deleteEvent, updateEvent } =
  eventsSlice.actions;
