import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await Api.get('/users');
});

export const addNewUser = createAsyncThunk('users/addNewUser', async (newUserData) => {
    return await Api.post('/users', newUserData);
})