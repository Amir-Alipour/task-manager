import TimeAgo from "../../components/TimeAgo";
import UserProfile from "../../components/UserProfile";

function Bookmark({bookmark}) {
    return (
        <div className="col-12 border-t border-b p-2 px-4 items-center hover:bg-gray-200">
            <div className="flex justify-between mt-2">
                <h5>{bookmark.title}</h5>
                <div className="w-10 h-10">
                    <UserProfile userID={bookmark.user} />
                </div>
            </div>
            <div className="flex">{bookmark.text.substring(0, 150)} ...</div>
            <div className="flex mt-3 text-gray-400">
                <TimeAgo date={bookmark.time} />
            </div>
        </div>
    );
}

export default Bookmark;
