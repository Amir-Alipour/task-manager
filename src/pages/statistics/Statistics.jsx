import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/tasksSlice/tasksActions";
import { selectTasksByStatus } from "../../store/tasksSlice/tasksSelectors";

function Statistics() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.tasks.status);

    const todos = useSelector((state) => selectTasksByStatus(state, "To Do"));
    const inProgress = useSelector((state) =>
        selectTasksByStatus(state, "In Progress")
    );
    const onHole = useSelector((state) =>
        selectTasksByStatus(state, "On Hole")
    );
    const done = useSelector((state) => selectTasksByStatus(state, "Done"));

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    const data = {
        labels: ["To Do", "In Progress", "On Hole", "Done"],
        datasets: [
            {
                label: "in column",
                data: [
                    todos.length,
                    inProgress.length,
                    onHole.length,
                    done.length,
                ],
                fill: false,
                backgroundColor: "#EFF6FF",
                borderColor: "#60A5FA",
            },
        ],
    };

    return (
        <div
            className="container border-l border-r p-3"
            style={{ minHeight: "94.3vh" }}
        >
            <Line data={data} />
            <div className="mt-5 row">
                <div className="col-12 col-md-6 col-lg-3 h-32 mt-2 flex justify-center">
                    <div className="col-10 border p-3 rounded">
                        <h4 className="mt-2">To Do 📝</h4>
                        <p className="text-gray-500 mt-4">{`have ${todos.length} task in To Do column`}</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 h-32 mt-2 flex justify-center">
                    <div className="col-10 border p-3 rounded">
                        <h4 className="mt-2">In Progress ⏳</h4>
                        <p className="text-gray-500 mt-3">{`have ${inProgress.length} task in In Progress column`}</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 h-32 mt-2 flex justify-center">
                    <div className="col-10 border p-3 rounded">
                        <h4 className="mt-2">On Hole 🔍</h4>
                        <p className="text-gray-500 mt-4">{`have ${onHole.length} task in On Hole column`}</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 h-32 mt-2 flex justify-center">
                    <div className="col-10 border p-3 rounded">
                        <h4 className="mt-2">Done! 💻</h4>
                        <p className="text-gray-500 mt-4">{`have ${done.length} task in Done column`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
