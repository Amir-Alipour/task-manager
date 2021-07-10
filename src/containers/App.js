import { BrowserRouter as Router } from "react-router-dom";
import Header from "../layout/Header/Header";
import RouteContainer from "./RouteContainer";

// store
import { Provider } from "react-redux";
import store from "../store/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Header />
                    <RouteContainer />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
