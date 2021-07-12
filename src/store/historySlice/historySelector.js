import { createSelector } from "reselect";
import { selectAllHistory } from "./historySlice";

export const selectHistoryById = createSelector(
    selectAllHistory,
    (state, historyID) => historyID,
    (historys, historyID) =>
        historys.filter((history) => history.id === historyID)
);
