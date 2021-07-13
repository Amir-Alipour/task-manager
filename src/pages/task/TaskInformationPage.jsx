import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteTask, fetchTasks } from "../../store/tasksSlice/tasksActions";
import { selectTaskById } from "../../store/tasksSlice/tasksSlice";
import UserProfile from "../../components/UserProfile";
import TimeAgo from "../../components/TimeAgo";
import TaskBadge from "../../components/TaskBadge";
import { useState } from "react";

const badgeOptions = [
    "UP TO DATE",
    "NEEDS REVIEW",
    "PROPOSED",
    "UNDER REVIEW",
    "PENDING APPROVAL",
    "APPROVED",
];

const statusOptions = ["To Do", "In Progress", "On Hole", "Done"];

function TaskInformationPage() {
    const { id } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const status = useSelector((state) => state.tasks.status);

    const task = useSelector((state) => selectTaskById(state, id));
    const [note, setNote] = useState();
    const [taskStatus, setTaskStatus] = useState();
    const [taskBadge, setTaskBadge] = useState();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (status === "success") {
            setNote(task.note);
            setTaskBadge(task.badge);
            setTaskStatus(task.status);
        }
    }, [status, task]);

    const handleDeleteTask = () => {
        dispatch(deleteTask(id));
        history.push("/");
    };

    return (
        <div
            className="container p-3 border-l border-r"
            style={{ height: "100vh" }}
        >
            <div className="flex justify-between">
                <h3>Task Information</h3>

                {task && (
                    <button
                        onClick={handleDeleteTask}
                        className="w-10 h-10 rounded bg-red-500 flex justify-center items-center text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                )}
            </div>

            <div className="mt-4">
                {!task ? (
                    <div className="alert alert-danger text-center">
                        Task Not Found
                    </div>
                ) : (
                    <div className="p-2">
                        <div className="row flex items-center justify-between">
                            <h4 className="col-12 col-lg-7">{task.title}</h4>
                            <div className="col-12 col-lg-5 flex items-center justify-between">
                                <div className="flex">
                                    <TimeAgo date={task.time} />
                                </div>
                                <div>
                                    <p className="text-gray-600">
                                        {task.status}
                                    </p>
                                </div>
                                <div className="w-12 h-12">
                                    <UserProfile userID={task.user} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <TaskBadge badge={task.badge} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <h6>task notes</h6>

                            <textarea
                                className="form-control shadow-none"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <div className="mt-5">
                            <p>description :</p>

                            <p className="mt-2">{task.text}</p>
                        </div>

                        <div className="mt-5">
                            <h5>Update</h5>

                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-11 col-md-5">
                                        <p>column :</p>
                                        <select
                                            className="form-control"
                                            value={taskStatus}
                                            onChange={(e) =>
                                                setTaskStatus(e.target.value)
                                            }
                                        >
                                            {statusOptions.map((status) => (
                                                <option
                                                    key={status}
                                                    value={status}
                                                >
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-11 col-md-5">
                                        <p>badge :</p>
                                        <select
                                            className="form-control"
                                            value={taskBadge}
                                            onChange={(e) =>
                                                setTaskBadge(e.target.value)
                                            }
                                        >
                                            {badgeOptions.map((badge) => (
                                                <option
                                                    key={badge}
                                                    value={badge}
                                                >
                                                    {badge}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskInformationPage;
