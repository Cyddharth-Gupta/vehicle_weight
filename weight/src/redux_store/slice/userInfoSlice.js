import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logInUser = createAsyncThunk(
  "userInfo/logInUser",
  async (formData) => {
    try {
      const response = await axios.post(
        "http://[::1]:3000/users/login",
        formData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  userInfoLoading: false,
  userData: [],
  userLoginData: [],
  error: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    getUserLoginData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default userInfoSlice.reducer;
export const userInfoLoading = (state) => state.userInfo.userInfoLoading;
export const userData = (state) => state.userInfo.userData;
export const userLoginData = (state) => state.userInfo.userLoginData;
export const { getUserLoginData } = userInfoSlice.actions;
