import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchUsers, addNewUser } from "./usersActions";

const usersAdapter = createEntityAdapter();

export const {
    selectById: selectUserById,
    selectIds: selectUsersIds,
    selectAll: selectAllUsers,
} = usersAdapter.getSelectors((state) => state.users);

const initialState = usersAdapter.getInitialState({
    status: "idle",
    error: null,
});

const usersSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = "loading";
        },
        [fetchUsers.fulfilled]: (state, action) => {
            usersAdapter.upsertMany(state, action.payload);
            state.status = "success";
        },
        [addNewUser.fulfilled]: usersAdapter.addOne,
    },
});

export default usersSlice.reducer;
