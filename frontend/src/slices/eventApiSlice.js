import { apiSlice } from "./apiSlice";

const EVENTS_URL = "/api/users/events";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}`,
        method: "PUT",
        body: data,
      }),
    }),
    getEvents: builder.mutation({
      query: () => ({
        url: `${EVENTS_URL}`,
        method: "GET",
      }),
    }),
    updateEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}/update`,
        method: "PUT",
        body:data
      }),
    }),
    deleteEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENTS_URL}`,
        method: "DELETE",
        body:data
      }),
    }),

  }),
});

export const { useAddEventMutation, useGetEventsMutation,useUpdateEventMutation,useDeleteEventMutation } = eventsApiSlice;
