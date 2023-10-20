import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVehicleTracker = createAsyncThunk("vehicleTracker/getVehicleTracker", async () => {
    try {
        const res = await axios.get("http://[::1]:3000/vehicles", {
          params: {
            filter: {
              offset: 0,
              limit: 10,
              skip: 0,
              order: "createdAt desc",
              where: { vehicleType: "LMV" },
            },
          },
        });
    } catch (error) {
       console.log(error); 
    }
});

const initialState = {
    loading: false,
    vehicleTrackerData: [],
    error: null,
};


export const vehicleTrackerSlice = createSlice({
    name: "vehicleTracker",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVehicleTracker.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getVehicleTracker.fulfilled, (state, action) => {
            state.loading = false;
            state.vehicleTrackerData = action.payload;
        });
        builder.addCase(getVehicleTracker.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default vehicleTrackerSlice.reducer;
export const VehicleTrackerData = (state) => state.vehicleTracker.vehicleTrackerData;
