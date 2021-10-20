import './styles/components/App.scss';
import {React} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Characters} from "./pages/Characters";
import {LogIn} from "./pages/Authorization";
import {Registration} from "./pages/Registration";
import {Locations} from "./pages/Locations";
import {Location} from "./components/ui/base/Location";
import {Navigation} from "./components/ui/base/Navigation";
import {Settings} from "./pages/Settings";
import PublicRoute from "./router/PublickRoutes";
import PrivateRoute from "./router/PrivateRoutes";
import {Episodes} from "./pages/Episodes";
import {CharacterProfile} from "./pages/CharacterProfile";
import {LocationProfile} from "./pages/LocationProfile";
import {EpisodesProfile} from "./pages/EpisodesProfile";

function App() {



    const vh = window.innerHeight/100;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
    const isAuthenticated = sessionStorage.getItem("isLoggedIn") === "true";

    return (

        <Router>

            <div className="App">
                <Switch>
                    <PrivateRoute
                        path="/settings"
                        isAuthenticated={isAuthenticated}
                    >
                        <Settings/>
                    </PrivateRoute>

                    <PrivateRoute
                        path="/characters"
                        isAuthenticated={isAuthenticated}
                    >
                        <Characters/>
                    </PrivateRoute>

                    <PrivateRoute
                        path="/location"
                        isAuthenticated={isAuthenticated}
                    >
                        <Locations/>
                    </PrivateRoute>

                    <PrivateRoute
                        path="/episodes"
                        isAuthenticated={isAuthenticated}
                    >
                        <Episodes/>
                    </PrivateRoute>

                    <PublicRoute
                        path="/registration"
                        isAuthenticated={isAuthenticated}
                    >
                        <Registration></Registration>
                    </PublicRoute>

                    <PublicRoute
                        path="/"
                        isAuthenticated={isAuthenticated}
                    >
                        <LogIn/>
                    </PublicRoute>
                </Switch>
            </div>


        </Router>

    );
}

export default App;
