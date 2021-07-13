import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTasks } from "../../store/tasksSlice/tasksActions";
import { selectTaskById } from "../../store/tasksSlice/tasksSlice";
import UserProfile from "../../components/UserProfile";
import TimeAgo from "../../components/TimeAgo";
import TaskBadge from "../../components/TaskBadge";

function TaskInformationPage() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.tasks.status);

    const { id } = useParams();
    const task = useSelector((state) => selectTaskById(state, id));

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    return (
        <div
            className="container p-3 border-l border-r"
            style={{ height: "94.3vh" }}
        >
            <h3>Task Information</h3>

            <div className="mt-4">
                {!task ? (
                    <div className="alert alert-danger text-center">
                        Task Not Found
                    </div>
                ) : (
                    <div className="p-2">
                        <div className="flex items-center justify-between">
                            <h4>{task.title}</h4>
                            <div className="flex">
                                <TimeAgo date={task.time} />
                            </div>
                            <div>
                                <p className="text-gray-600">{task.status}</p>
                            </div>
                            <div className="w-12 h-12">
                                <UserProfile userID={task.user} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <TaskBadge badge={task.badge} />
                            </div>
                        </div>

                        <div className="mt-3">
                            <h6>task notes</h6>

                            <textarea className="form-control shadow-none" value={task.note} cols="30" rows="10"></textarea>
                        </div>

                        <div className="mt-5">
                            <p>description :</p>

                            <p className="mt-2">
                                {task.text}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TaskInformationPage;
