import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeightTracker = createAsyncThunk("weightTracker/fetchWeightTracker", async () => {
    try {
        const res = await axios.get("http://[::1]:3000/weighing-data", {
          params: {
            filter: JSON.stringify({
              offset: 0,
              limit: 100,
              skip: 0,
              order: "desc",
              include: [
                {
                  relation: "vehicle",
                  scope: {
                    offset: 0,
                    skip: 0,
                    order: "desc",
                    fields: {},
                    include: [],
                  },
                },
                {
                  relation: "user",
                  scope: {
                    offset: 0,
                    skip: 0,
                    order: "desc",
                    fields: {},
                    include: [],
                  },
                },
                {
                  relation: "zone",
                  scope: {
                    offset: 0,
                    skip: 0,
                    order: "desc",
                    fields: {},
                    include: [],
                  },
                },
              ],
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
    weightTrackerData: [],
    error: null,
};

export const weightTrackerSlice = createSlice({
    name: "weightTracker",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeightTracker.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchWeightTracker.fulfilled, (state, action) => {
            state.loading = false;
            state.weightTrackerData = action.payload;
        });
        builder.addCase(fetchWeightTracker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default weightTrackerSlice.reducer;
export const weightTrackerData = (state) => state.weightTracker.weightTrackerData;