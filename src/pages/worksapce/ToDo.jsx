import { useSelector } from "react-redux";
import { selectTasksByStatus } from "../../store/tasksSlice/tasksSelectors";

function ToDo() {
    const tasks = useSelector((state) => selectTasksByStatus(state, "To Do"));

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 h-full flex flex-column box-border p-2">
            <div>
                <div className="text-2xl font-semibold flex items-center justify-between">
                    <p>To Do</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full h-full border rounded-lg px-3 py-3 overflow-y-scroll custom-scrollbar">
                <div className="w-100 h-40 border rounded-md mb-3 hover:shadow-md p-3">
                    <div class="has-tooltip">
                        <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                            Some Nice Tooltip Text
                        </span>
                        Custom Position (above)
                    </div>
                    <div className="flex justify-between">
                        <div className="bg-blue-200 text-blue-400 px-2 rounded-full">
                            Needs view
                        </div>
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
                    </div>
                </div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
                <div className="w-100 h-40 border rounded-md mb-3"></div>
            </div>
        </div>
    );
}

export default ToDo;
