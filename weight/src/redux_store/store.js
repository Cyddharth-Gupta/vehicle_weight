import {configureStore} from "@reduxjs/toolkit"
import {userInfoSlice} from "./slice/userInfoSlice.js"
import {zoneTrackerSlice} from "./slice/zoneTrackerSlice.js"
import {weightTrackerSlice} from "./slice/weightTrackerSlice.js"
import {userTrackerSlice} from "./slice/userTrackerSlice.js"

export const store = configureStore({
    reducer: {
        userInfo: userInfoSlice.reducer,
        zoneTracker: zoneTrackerSlice.reducer,
        weightTracker: weightTrackerSlice.reducer,
        userTracker: userTrackerSlice.reducer,
    }
})