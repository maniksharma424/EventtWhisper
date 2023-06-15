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
     state.events =  state.events.filter((event) => event._id !== action.payload._id);
    },
    updateEvent: (state, action) => {
      const index = state.events.findIndex((item) =>
        item._id === action.payload._id
      );
      if (index === -1) {
        throw new Error("Event not found");
      }
      // Update the event properties

      const { day, month, year, hour, minutes, timeZone, name, description,active } =
        action.payload;
      state.events[index].day = day || state.events[index].day;
      state.events[index].month = month || state.events[index].month;
      state.events[index].year = year || state.events[index].year;
      state.events[index].hour = hour || state.events[index].hour;
      state.events[index].minutes =
        minutes || state.events[index].minutes;
      state.events[index].timeZone =
        timeZone || state.events[index].timeZone;
      state.events[index].name = name || state.events[index].name;
      state.events[index].description =
        description || state.events[index].description;
        state.events[index].active = active 
    },
  },
});
export default eventsSlice.reducer;
export const { setEvents, addEvent, deleteEvent, updateEvent } =
  eventsSlice.actions;
