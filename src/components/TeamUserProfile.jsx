import { useSelector } from "react-redux";
import { selectUserById } from "../store/usersSlice/usersSlice";

function TeamUserProfile({ userID }) {
    const user = useSelector(state => selectUserById(state, userID));

    return (
        <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={user.profile}
            alt={`${user.name} profile`}
        />
    );
}

export default TeamUserProfile;
