import { useSelector } from "react-redux";
import TeamUserProfile from "../../components/TeamUserProfile";
import UserProfile from "../../components/UserProfile";
import { selectUsersIds } from "../../store/usersSlice/usersSlice";

function TeamProfile() {
    const users = useSelector(selectUsersIds);

    return (
        <div className="flex -space-x-2 overflow-hidden">
            {
                users && users.map(user => (
                    <TeamUserProfile key={user} userID={user}/>
                ))
            }
        </div>
    );
}

export default TeamProfile;
