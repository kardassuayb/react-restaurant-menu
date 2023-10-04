import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // DEV ONLY!!!
// const pause = (duration) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

const titleApi = createApi({
  reducerPath: "title",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // fetchFn: async (...args) => {
    //   await pause(1000);
    //   return fetch(...args);
    // },
  }),
  endpoints(builder) {
    return {
      fetchTitle: builder.query({
        query: () => {
          return {
            url: "/tabs",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchTitleQuery } = titleApi;
export { titleApi };
