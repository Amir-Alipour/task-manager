import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistorys } from "../../store/historySlice/historyActions";
import { slectAllHistoryIds } from "../../store/historySlice/historySlice";
import HistoryStamp from "./HistoryStamp";

function Historys() {
    const status = useSelector((state) => state.history.status);
    const dispatch = useDispatch();
    const historyIds = useSelector(slectAllHistoryIds);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchHistorys());
        }
    }, [status, dispatch]);

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
