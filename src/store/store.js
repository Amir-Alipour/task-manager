import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice/tasksSlice";
import usersSlice from "./usersSlice/usersSlice";
import historySlice from "./historySlice/historySlice";
import bookmarkSlice from "./bookmarkSlice/bookmarkSlice";
import profileSlice from "./profileSlice/profileSlice";

const store = configureStore({
    reducer: {
        tasks: tasksSlice,
        users: usersSlice,
        history: historySlice,
        bookmark: bookmarkSlice,
        profile: profileSlice
    },
});

export default store;
