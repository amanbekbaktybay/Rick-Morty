import './styles/components/App.scss';
import {React, ReactDOM} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Search} from "./Search";
import {Characters} from "./pages/Characters";
import {LogIn} from "./pages/Authorization";
import {Registration} from "./pages/Registration";

function App() {
    // document.documentElement.setAttribute("data-theme","dark");
  return (
    <div className="App">
        <Registration/>
        {/*<LogIn></LogIn>*/}
    </div>
  );
}

export default App;
