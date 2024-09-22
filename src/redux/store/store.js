import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../reducers/r.header';

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export default store;

