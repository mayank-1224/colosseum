import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: any = [];

export const userWorkoutsSlice = createSlice({
  name: "userWorkouts",
  initialState,
  reducers: {
    firstInitialize: (state) => {
      if (localStorage.getItem("userWorkouts") === null) {
        localStorage.setItem("userWorkouts", JSON.stringify(state));
      }
    },
    getUserWorkouts: (state) => {
      const temp = JSON.parse(localStorage.getItem("userWorkouts")!);
      return temp;
    },
    addWorkout: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
      localStorage.setItem("userWorkouts", JSON.stringify(state));
    },
    deleteWorkout: (state, action: PayloadAction<any>) => {
      const temp = state.filter((workout: any) => {
        return workout.id !== action.payload;
      });
      temp.forEach((workout: any, index: number) => {
        workout.id = index + 1;
      });
      localStorage.setItem("userWorkouts", JSON.stringify(temp));
      return temp;
    },
  },
});

export const { firstInitialize, getUserWorkouts, addWorkout, deleteWorkout } =
  userWorkoutsSlice.actions;

export const selectUserWorkouts = (state: RootState) => state.userWorkouts;

export default userWorkoutsSlice.reducer;
