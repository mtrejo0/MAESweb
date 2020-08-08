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
import AboutUs from "./pages/aboutUs/aboutUs";
import Contact from "./pages/contact/contact";
import Sponsors from "./pages/sponsors/sponsors";


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
                    <AboutUs/>
                </Route>
                <Route path="/sponsors">
                    <Sponsors/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router><Footer/>
      </div>
  );
}

export default App;
