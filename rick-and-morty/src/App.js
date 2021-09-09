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

function App() {

    const changeNavigationIconColor = (idSvg,idTitle) =>
    {
        document.getElementById(idSvg).style.color = "#43D049";
        document.getElementById(idTitle).style.color = "#43D049";
    }
  return (

      <Router>

          <div className="App">
              <div className="wrapper">
                  <div className="navigation">
                      <div className="navigation__wrapper">
                          <Link to="/characters" onClick={() => {
                              changeNavigationIconColor("characters-icon","characters-title")
                          }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" className="navigation__characters navigation-icon" id="characters-icon"  xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M9.46591 0C4.45278 0 0.375 4.03793 0.375 8.99984L0.426516 16.9997C0.673991 18.6907 2.13359 19.9996 3.91035 19.9996C5.09621 19.9996 6.0053 19.5826 6.60934 18.8257C6.98499 19.199 7.43162 19.4951 7.92346 19.6966C8.4153 19.8982 8.9426 20.0013 9.47492 20C10.0072 19.9987 10.534 19.893 11.0248 19.689C11.5157 19.4851 11.9608 19.1869 12.3346 18.8117C12.9417 19.5736 13.8538 19.9996 15.0215 19.9996C16.971 19.9996 18.5568 18.4297 18.5568 16.4997V8.99984C18.5568 4.03793 14.479 0 9.46591 0ZM6.29839 10.9661C7.52569 10.9661 8.52062 9.97122 8.52062 8.74392C8.52062 7.51662 7.52569 6.5217 6.29839 6.5217C5.07109 6.5217 4.07617 7.51662 4.07617 8.74392C4.07617 9.97122 5.07109 10.9661 6.29839 10.9661ZM15.1871 8.74392C15.1871 9.97122 14.1922 10.9661 12.9649 10.9661C11.7376 10.9661 10.7427 9.97122 10.7427 8.74392C10.7427 7.51662 11.7376 6.5217 12.9649 6.5217C14.1922 6.5217 15.1871 7.51662 15.1871 8.74392Z" />
                                  <path fillRule="evenodd" clipRule="evenodd" d="M9.46591 0C4.45278 0 0.375 4.03793 0.375 8.99984L0.426516 16.9997C0.673991 18.6907 2.13359 19.9996 3.91035 19.9996C5.09621 19.9996 6.0053 19.5826 6.60934 18.8257C6.98499 19.199 7.43162 19.4951 7.92346 19.6966C8.4153 19.8982 8.9426 20.0013 9.47492 20C10.0072 19.9987 10.534 19.893 11.0248 19.689C11.5157 19.4851 11.9608 19.1869 12.3346 18.8117C12.9417 19.5736 13.8538 19.9996 15.0215 19.9996C16.971 19.9996 18.5568 18.4297 18.5568 16.4997V8.99984C18.5568 4.03793 14.479 0 9.46591 0ZM6.29839 10.9661C7.52569 10.9661 8.52062 9.97122 8.52062 8.74392C8.52062 7.51662 7.52569 6.5217 6.29839 6.5217C5.07109 6.5217 4.07617 7.51662 4.07617 8.74392C4.07617 9.97122 5.07109 10.9661 6.29839 10.9661ZM15.1871 8.74392C15.1871 9.97122 14.1922 10.9661 12.9649 10.9661C11.7376 10.9661 10.7427 9.97122 10.7427 8.74392C10.7427 7.51662 11.7376 6.5217 12.9649 6.5217C14.1922 6.5217 15.1871 7.51662 15.1871 8.74392Z" />
                              </svg>
                              <h5 className="navigation__title selected" id="characters-title">Персонажи</h5>
                          </Link>
                      </div>
                      <div className="navigation__wrapper">
                          <Link to="/location" onClick={() => {
                              changeNavigationIconColor("location-icon","location-title")
                          }}>
                              <img src="assets/location-icon.svg" alt="" className="navigation__location navigation-icon" id="location-icon"/>
                              <h5 className="navigation__title" id="location-title">Локации</h5>
                          </Link>
                      </div>
                      <div className="navigation__wrapper">

                          <img src="assets/episodes-icon.svg " alt="" className="navigation__episodes navigation-icon"/>
                          <h5 className="navigation__title">Эпизоды</h5>
                      </div>
                      <div className="navigation__wrapper">
                          <Link to="/settings">
                              <img src="assets/settings-icon.svg" alt="" className="navigation__settings navigation-icon"/>
                              <h5 className="navigation__title">Настройки</h5>
                          </Link>
                      </div>
                  </div>
              </div>

              <Switch>
                  <Route path="/">
                      <LogIn/>
                  </Route>
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
                      <Settings></Settings>
                  </Route>
                  <Route path="/registration">
                      <Registration></Registration>
                  </Route>
              </Switch>
          </div>


      </Router>

  );
}

export default App;
