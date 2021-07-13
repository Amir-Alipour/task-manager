import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTasks } from "../../store/tasksSlice/tasksActions";
import { selectAllTasks } from "../../store/tasksSlice/tasksSlice";

function Trash() {
    const [taskID, setTaskID] = useState();
    const [queryTasks, setQueryTasks] = useState([]);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const tasksStatus = useSelector((state) => state.tasks.status);
    const tasks = useSelector(selectAllTasks);

    useEffect(() => {
        if (tasksStatus === "idle") {
            dispatch(fetchTasks());
        }
    }, [dispatch, tasksStatus]);

    const handleSearchTask = (e) => {
        setSearch(e.target.value);
        const filterTasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(e.target.value)
        );
        setQueryTasks(filterTasks);
    };

    const handleDeleteTaskWithSelectBox = () => {
        if (taskID) {
            dispatch(deleteTask(taskID));
        }
    };

    const handleDeleteTaskWithID = (ID) => {
        if (ID) {
            dispatch(deleteTask(ID));
            setSearch('');
            setQueryTasks([]);
        }
    };

    return (
        <div
            className="container p-3 border-l border-r"
            style={{ minHeight: "94.3vh" }}
        >
            <h3>Trash</h3>

            <h6 className="mt-4">select Task :</h6>
            <select
                className="form-control mt-2"
                value={taskID}
                onChange={(e) => setTaskID(e.target.value)}
            >
                <option>select a task ⬇</option>
                {tasks.map((task) => (
                    <option value={task.id} key={task.id}>
                        {`${task.title} | (${task.status}) status`}
                    </option>
                ))}
            </select>
            <button
                className="p-2 px-3 text-red-500 mt-3 border-1 border-red-400"
                onClick={handleDeleteTaskWithSelectBox}
            >
                Delete
            </button>

            <h6 className="mt-5">or search Task and Click on it :</h6>
            <input
                value={search}
                onChange={handleSearchTask}
                type="text"
                placeholder="search task title"
                className="form-control"
            />
            {queryTasks.length > 0 ? (
                <div className="row mt-4 container">
                    {queryTasks.map((task) => (
                        <div
                            key={task.id}
                            className="px-3 pt-3 border my-2 hover:bg-red-100 cursor-pointer"
                            onClick={() => handleDeleteTaskWithID(task.id)}
                        >
                            <p>{task.title}</p>
                            <p className="mt-1 text-gray-500">
                                status : {task.status}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="alert alert-warning mx-3 text-center mt-4">
                    no result here
                </div>
            )}
        </div>
    );
}

export default Trash;
