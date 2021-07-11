import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    return await Api.get('/user');
})