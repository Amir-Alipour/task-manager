import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/AxiosConfig";

export const fetchHistorys = createAsyncThunk(
    "historys/fetchHistorys",
    async () => {
        return await Api.get("/history");
    }
);