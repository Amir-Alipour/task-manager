import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchHistorys } from "./historyActions";

const historyAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.time - a.time,
});

export const {
     selectIds: slectAllHistoryIds,
     selectAll: selectAllHistory
} = historyAdapter.getSelectors((state) => state.history);

const initialState = historyAdapter.getInitialState({
    status: "idle",
    error: null,
});

const historySlice = createSlice({
    name: "historys",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchHistorys.pending]: (state) => {
            state.status = "loading";
        },
        [fetchHistorys.fulfilled]: (state, action) => {
            historyAdapter.upsertMany(state, action.payload);
            state.status = "success";
        },
    },
});

export default historySlice.reducer;
