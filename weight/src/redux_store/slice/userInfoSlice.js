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
  loading: false,
  userData: null,
  error: null,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducer: {},
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
export const userData = (state) => state.userInfo.userData;
