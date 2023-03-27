import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface userInfoState {
  age: number;
  gender: string;
  weight: number;
  heightFT: number;
  heightIN: number;
  bmi: number;
  bodyFat: number;
  bicep: number;
  chest: number;
  waist: number;
  neck: number;
  hips: number;
  activityLevel: string;
  weightHistory: number[];
}

const initialState: userInfoState = {
  age: 0,
  gender: "male",
  weight: 0,
  heightFT: 0,
  heightIN: 0,
  bmi: 0,
  bodyFat: 0,
  bicep: 0,
  chest: 0,
  waist: 0,
  neck: 0,
  hips: 0,
  activityLevel: "",
  weightHistory: [],
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    firstInitialize: (state) => {
      if (localStorage.getItem("userInfo") === null) {
        localStorage.setItem("userInfo", JSON.stringify(state));
      }
    },
    getUserInfo: (state) => {
      const temp = JSON.parse(localStorage.getItem("userInfo")!);
      state.age = temp.age;
      state.gender = temp.gender;
      state.weight = temp.weight;
      state.heightFT = temp.heightFT;
      state.heightIN = temp.heightIN;
      state.bmi = temp.bmi;
      state.bodyFat = temp.bodyFat;
      state.bicep = temp.bicep;
      state.chest = temp.chest;
      state.waist = temp.waist;
      state.neck = temp.neck;
      state.hips = temp.hips;
      state.activityLevel = temp.activityLevel;
      state.weightHistory = temp.weightHistory;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateHeightFT: (state, action: PayloadAction<number>) => {
      state.heightFT = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateHeightIN: (state, action: PayloadAction<number>) => {
      state.heightIN = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateBMI: (state, action: PayloadAction<number>) => {
      state.bmi = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateBodyFat: (state, action: PayloadAction<number>) => {
      state.bodyFat = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateBicep: (state, action: PayloadAction<number>) => {
      state.bicep = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateChest: (state, action: PayloadAction<number>) => {
      state.chest = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateWaist: (state, action: PayloadAction<number>) => {
      state.waist = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateNeck: (state, action: PayloadAction<number>) => {
      state.neck = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateHips: (state, action: PayloadAction<number>) => {
      state.hips = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
    updateUserInfo: (state, action: PayloadAction<userInfoState>) => {
      console.log(action.payload);
      state.heightFT = action.payload.heightFT;
      localStorage.setItem("userInfo", JSON.stringify(state));
    },
  },
});

export const {
  firstInitialize,
  getUserInfo,
  updateAge,
  updateGender,
  updateWeight,
  updateHeightFT,
  updateHeightIN,
  updateBMI,
  updateBodyFat,
  updateBicep,
  updateChest,
  updateWaist,
  updateNeck,
  updateHips,
  updateUserInfo,
} = userInfoSlice.actions;

export const selectUserInfo = (state: RootState) => state.userInfo;

export default userInfoSlice.reducer;
