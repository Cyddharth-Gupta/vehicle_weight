import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserTracker = createAsyncThunk("userTracker/fetchUserTracker", async () => {
    try {
       const res = await axios.get("http://[::1]:3000/users", {
         params: {
           filter: JSON.stringify({
             offset: 0,
             limit: 10,
             skip: 0,
             order: "createdAt desc",
             where: { userType: "employee" },
           }),
         },
       });
       return res.data; 
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    loading: false,
    userTrackerData: [],
    error: null,
};


export const userTrackerSlice = createSlice({
    name: "userTracker",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUserTracker.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserTracker.fulfilled, (state, action) => {
            state.loading = false;
            state.userTrackerData = action.payload;
        });
        builder.addCase(fetchUserTracker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default userTrackerSlice.reducer;
export const userTrackerData = (state) => state.userTracker.userTrackerData;