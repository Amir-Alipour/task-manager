import { useSelector } from "react-redux";
import { selectUserById } from "../store/usersSlice/usersSlice";

function UserProfile({ userID }) {
    const user = useSelector((state) => selectUserById(state, userID));

    return (
        <>
            {user ? (
                <img
                    src={user.profile}
                    alt={`${user.name} profile`}
                    className="rounded"
                />
            ) : null}
        </>
    );
}

export default UserProfile;
