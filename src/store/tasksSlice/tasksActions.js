import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../utils/AxiosConfig';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    return await Api.get('/tasks');
});