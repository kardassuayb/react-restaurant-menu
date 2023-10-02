import { configureStore } from "@reduxjs/toolkit";
import { titleReducer } from "./slices/titleSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { titleApi } from "./apis/titleApi";
import { titleItemApi } from "./apis/titleItemApi";

export const store = configureStore({
  reducer: {
    title: titleReducer,
    [titleApi.reducerPath]: titleApi.reducer,
    [titleItemApi.reducerPath]: titleItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(titleApi.middleware)
      .concat(titleItemApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchTitleQuery } from "./apis/titleApi";
export { useFetchTitleItemQuery } from "./apis/titleItemApi";
