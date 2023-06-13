import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({baseUrl: ""});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Users","Events"],
  endpoints: (builder) => ({}),
});
