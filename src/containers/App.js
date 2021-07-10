import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layout/Header/Header";
import RouteContainer from "./RouteContainer";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <RouteContainer />
            </Router>
        </div>
    );
}

export default App;
