import ToDo from "./ToDo";
import InProgress from "./InProgress";
import OnHole from "./OnHole";
import Done from "./Done";

function Workspace() {
    return (
        <div className="row px-4 py-2 h-screen">
            <ToDo />

            <InProgress />

            <OnHole />

            <Done />

        </div>
    );
}

export default Workspace;
