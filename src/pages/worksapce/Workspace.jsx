import ToDo from "./ToDo";
import InProgress from "./InProgress";
import OnHole from "./OnHole";
import Done from "./Done";
import WorkspaceHeader from "./WorkspaceHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../store/tasksSlice/tasksActions";
import { selectTasksIds } from "../../store/tasksSlice/tasksSlice";
import Loader from '../../components/Loader';

function Workspace() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.tasks.status);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    return (
        <>
            <div className="row px-4 py-2 h-20">
                <WorkspaceHeader />
            </div>
            {status === "loading" ? (
                <Loader />
            ) : (
                <div className="row px-4 py-2 h-screen">
                    <ToDo />

                    <InProgress />

                    <OnHole />

                    <Done />
                </div>
            )}
        </>
    );
}

export default Workspace;
