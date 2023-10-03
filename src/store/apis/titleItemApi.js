import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const titleItemApi = createApi({
  reducerPath: "titleItem",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchTitleItem: builder.query({
        query: (title) => {
          return {
            url: "/products",
            params: {
              titleId: title.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchTitleItemQuery } = titleItemApi;
export { titleItemApi };
