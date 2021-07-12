import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBookmarks } from "./bookmarkActions";

const bookmarksAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.time - a.time,
});

export const {
    selectAll: selectAllBookmarks
} = bookmarksAdapter.getSelectors(state => state.bookmark)

const initialState = bookmarksAdapter.getInitialState({
    status: "idle",
    error: null,
});

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBookmarks.pending]: (state) => {
            state.status = "loading";
        },
        [fetchBookmarks.fulfilled]: (state, action) => {
            bookmarksAdapter.upsertMany(state, action.payload);
            state.status = "success";
        },
    },
});

export default bookmarkSlice.reducer;
