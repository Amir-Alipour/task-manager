import TaskBadge from "./TaskBadge";
import TimeAgo from "./TimeAgo";
import UserProfile from "./UserProfile";

function Task({ data }) {
    return (
        <div className="w-100 border rounded-md mb-3 hover:shadow-md p-3">
            <div className="flex justify-between">
                <TaskBadge badge={data.badge} />
                <div className="group cursor-pointer relative">
                    <div className="bg-gray-200 w-6 h-6 rounded flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                        </svg>
                    </div>
                    <div className="opacity-0 w-24 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-50 group-hover:opacity-100 -left-16 bottom-full pointer-events-none">
                        {data.status}
                        <svg
                            className="absolute text-black h-2 w-full left-7 top-full"
                            x="0px"
                            y="0px"
                            viewBox="0 0 255 255"
                        >
                            <polygon
                                className="fill-current"
                                points="0,0 127.5,127.5 255,0"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex mt-2">
                <p className="text-lg font-bold text-gray-800 cursor-pointer hover:text-gray-500">
                    {data.title}
                </p>
            </div>
            <div className="flex justify-between text-gray-300">
                <div className="flex">
                    <TimeAgo date={data.time} />
                </div>
                <div className="w-7 h-7 rounded-lg">
                    <UserProfile userID={data.user} />
                </div>
            </div>
        </div>
    );
}

export default Task;
