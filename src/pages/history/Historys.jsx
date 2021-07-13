import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistorys } from "../../store/historySlice/historyActions";
import { slectAllHistoryIds } from "../../store/historySlice/historySlice";
import { fetchUsers } from "../../store/usersSlice/usersActions";
import HistoryStamp from "./HistoryStamp";

function Historys() {
    const historyStatus = useSelector((state) => state.history.status);
    const usersStatus = useSelector((state) => state.users.status);
    const dispatch = useDispatch();
    const historyIds = useSelector(slectAllHistoryIds);

    useEffect(() => {
        if (historyStatus === "idle") {
            dispatch(fetchHistorys());
            if (usersStatus === "idle") {
                dispatch(fetchUsers());
            }
        }
    }, [historyStatus, usersStatus, dispatch]);

    return (
        <div
            className="container border-r border-l"
            style={{ minHeight: "94.3vh" }}
        >
            <div className="row">
                {historyIds.length > 0
                    ? historyIds.map((history) => (
                          <HistoryStamp key={history} historyID={history} />
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Historys;
