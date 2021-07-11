import { Route, Switch } from "react-router-dom";
import Workspace from "../pages/worksapce/Workspace";

function AppContainer() {
    return (
        <Switch>
            <Route path="/" exact>
                <Workspace />
            </Route>
        </Switch>
    );
}

export default AppContainer;
