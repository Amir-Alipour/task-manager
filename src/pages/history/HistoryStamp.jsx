import { useSelector } from "react-redux";
import { selectHistoryById } from "../../store/historySlice/historySelector";

function HistoryStamp({ historyID }) {
    const history = useSelector((state) => selectHistoryById(state, historyID));
    console.log(history);

    return (
        <div className="col-12 border-b p-3">
            <div classNames="flex mb-4">
                <p>abbbas do it in 12 hours ago</p>
            </div>
            <div classNames="flex">
                <p>sdfsdfasdf</p>
            </div>
        </div>
    );
}

export default HistoryStamp;
