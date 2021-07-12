import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/AxiosConfig";

export const fetchBookmarks = createAsyncThunk(
    "bookmarks/fetchBookmarks",
    async () => {
        return await Api.get("/bookmarks");
    }
);

export const addNewBookmark = createAsyncThunk(
    "bookmarks/addNewBookmark",
    async (newBookmarkData) => {
        return await Api.post("/bookmarks", newBookmarkData);
    }
);
