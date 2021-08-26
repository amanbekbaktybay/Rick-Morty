import './styles/App.scss';
import {React, ReactDOM} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Search} from "./Search";
import {Characters} from "./Characters";

function App() {
  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
