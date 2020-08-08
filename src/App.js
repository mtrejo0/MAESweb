import React from 'react';

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
          <div id={"home"}></div>
          <Home />
          <div id={"aboutUs"}></div>
          <AboutUs/>
          <div id={"sponsors"}></div>
          <Sponsors/>
          <div id={"contact"}></div>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
