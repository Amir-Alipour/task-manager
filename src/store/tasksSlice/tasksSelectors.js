import { createSelector } from "@reduxjs/toolkit";
import { selectAllTasks } from "./tasksSlice";

export const selectTasksByStatus = createSelector(
    selectAllTasks,
    (state, status) => status,
    (tasks, status) => tasks.filter((task) => task.status === status)
);

export const selectTaskById = createSelector(
    selectAllTasks,
    (state, taskId) => taskId,
    (tasks, taskId) => tasks.filter((task) => task.id === taskId)
);
