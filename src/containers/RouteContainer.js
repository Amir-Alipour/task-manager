import { Route, Switch } from "react-router-dom";

// pages
import Workspace from "../pages/worksapce/Workspace";
import Bookmarks from "../pages/bookmark/Bookmarks";
import Historys from "../pages/history/Historys";

function AppContainer() {
    return (
        <Switch>
            <Route path="/" exact>
                <Workspace />
            </Route>
            <Route path="/bookmark">
                <Bookmarks />
            </Route>
            <Route path="/history">
                <Historys />
            </Route>
        </Switch>
    );
}

export default AppContainer;
