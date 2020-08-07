import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import './App.css';
import MainNav from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home/home";


function App() {

  return (
      <div>
        <MainNav/>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/aboutUs">
                    <> about us </>
                </Route>
                <Route path="/constitution">
                    <> constitution </>
                </Route>
                <Route path="/sponsors">
                    <> sponsors </>
                </Route>
                <Route path="/contacts">
                    <> contacts</>
                </Route>
                <Route path="/national">
                    <> national </>
                </Route>
            </Switch>
        </Router><Footer/>
      </div>
  );
}

export default App;
