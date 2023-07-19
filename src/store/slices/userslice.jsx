import { createSlice } from "@reduxjs/toolkit";

const userSlice = new createSlice({
  name: "users",
  initialState: [],

  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});

export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
export default userSlice;
