import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await Api.get('/users');
});