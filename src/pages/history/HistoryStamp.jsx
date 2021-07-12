import moment from "moment";
import { useSelector } from "react-redux";
import { selectHistoryById } from "../../store/historySlice/historySlice";
import {selectUserById} from '../../store/usersSlice/usersSlice';

function HistoryStamp({ historyID }) {
    const history = useSelector((state) => selectHistoryById(state, historyID));
    const user = useSelector(state => selectUserById(state, history.user));
    const momentDate = moment(history.time);

    return (
        <div className="col-12 border-b p-3 hover:bg-blue-100 cursor-pointer">
            <div className="flex">
                <p>
                    {`${user ? user.name : 'Unknown'} Did at ${momentDate.fromNow()}`}
                </p>
            </div>
            <div className="flex text-gray-500">
                <p>{history.Text}</p>
            </div>
        </div>
    );
}

export default HistoryStamp;
