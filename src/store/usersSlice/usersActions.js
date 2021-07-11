import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await Api.get('/members');
});

export const addNewUser = createAsyncThunk('users/addNewUser', async (newUserData) => {
    return await Api.post('/members', newUserData);
})