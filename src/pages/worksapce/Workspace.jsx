import ToDo from "./ToDo";
import InProgress from "./InProgress";
import OnHole from "./OnHole";
import Done from "./Done";
import WorkspaceHeader from "./WorkspaceHeader";

function Workspace() {
    return (
        <>
        <div className="row px-4 py-2 h-20">
            <WorkspaceHeader />
        </div>
        <div className="row px-4 py-2 h-screen">
            <ToDo />

            <InProgress />

            <OnHole />

            <Done />

        </div>
        </>
    );
}

export default Workspace;
