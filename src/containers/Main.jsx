import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import About from './About';
import Sponsors from './Sponsors';
import Exec from './Exec';
import Events from './Events';
import ContactUs from './ContactUs';
import ComServe from './ComServe';
import Members from './Members';
import '../styles/main.css';



const Main = () => ( 
    <div className = "content" >
      <Switch >
      <Route exact path = '/' component = {About}/> 
      <Route path = '/comserve' component = {ComServe}/>
      <Route path = '/members' component = {Members}/>
      <Route path = '/sponsors'component = {Sponsors}/> 
      <Route path = '/exec' component = {Exec}/> 
      <Route path = '/contact' component = {ContactUs}/> 
      <Route path = '/events' component = {Events}/> 
      </Switch> 
    </div> 
)

export default Main;
