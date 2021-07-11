import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// actions
import { fetchTasks, addNewTask } from "./tasksActions";

const tasksAdapter = createEntityAdapter({
    selectId: (item) => item.id,
    sortComparer: (a, b) => b.time - a.time
});

export const {
    selectAll: selectAllTasks,
    selectById: selectTaskById,
    selectIds: selectTasksIds
} = tasksAdapter.getSelectors(state => state.tasks);

const initialState = tasksAdapter.getInitialState({
    status: 'idle',
    error: null
})

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchTasks.fulfilled]: (state, action) => {
            tasksAdapter.upsertMany(state, action.payload);
            state.status = 'success'
        },
        [addNewTask.fulfilled]: tasksAdapter.addOne,
    }
});

export default tasksSlice.reducer;