import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userInfoReducer from "./userInfoSlice";
import userWorkoutsReducer from "./userWorkoutsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer,
    userWorkouts: userWorkoutsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/* 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
*/
