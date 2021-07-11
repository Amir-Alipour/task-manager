import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {fetchProfile} from './profileActions';

const profileAdapter = createEntityAdapter();

export const  {
    selectAll: selectProfile
} = profileAdapter.getSelectors(state => state.profile)

const initialState = profileAdapter.getInitialState({
    status: 'idle',
    error: null
});

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProfile.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchProfile.fulfilled]: (state, action) => {
            profileAdapter.upsertOne(state, action.payload);
            state.status = 'success';
        }
    }
})

export default profileSlice.reducer;