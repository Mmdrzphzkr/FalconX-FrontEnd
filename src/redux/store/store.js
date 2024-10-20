import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../reducers/r.header";
import authReducer from "../reducers/r.auth";
import userReducer from "../reducers/r.user";

const store = configureStore({
  reducer: {
    header: headerReducer,
    auth: authReducer,
    user: userReducer
  },
});

export default store;
