import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userslice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

console.log(userSlice);
export default store;
