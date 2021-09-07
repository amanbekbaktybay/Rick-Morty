import './styles/components/App.scss';
import {React} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {Search} from "./components/ui/base/Search";
import {Characters} from "./pages/Characters";
import {LogIn} from "./pages/Authorization";
import {Registration} from "./pages/Registration";
import {Locations} from "./pages/Locations";
import {Location} from "./components/ui/base/Location";
import {Navigation} from "./components/ui/base/Navigation";

function App() {
    // document.documentElement.setAttribute("data-theme","dark");
  return (

      <Router>
          <div className="App">
              {/*<Locations></Locations>*/}

              <nav>
                  <ul>
                      <li>
                          <Link to="/characters">Chatacters</Link>
                      </li>
                      <li>
                          <Link to="/location">Location</Link>
                      </li>
                  </ul>
              </nav>
              <Navigation></Navigation>
          </div>

          <Switch>
              <Route path="/characters">
                    <Characters></Characters>
              </Route>
              <Route path="/location">
                    <Locations></Locations>
              </Route>
              <Route path="/episodes">
                    <Characters></Characters>
              </Route>
              <Route path="/settings">
                    <Characters></Characters>
              </Route>

          </Switch>
      </Router>

  );
}

export default App;
