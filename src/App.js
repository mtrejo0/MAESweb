import React from 'react';

import { Route, Redirect, BrowserRouter} from 'react-router-dom'

import Header from './components/header'

import About from './containers/About'
import ComServe from './containers/ComServe'
import Members from './containers/Members'
import Sponsors from './containers/Sponsors'
import Exec from './containers/Exec'
import ContactUs from './containers/ContactUs'
import Events from './containers/Events'

const App = () => (
	<div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
		<Header/>
			<Route exact path="/" render={() => (
				<Redirect to="/home"/>
			)}/>
			<Route exact path = '/home' component = {About}/> 
			<Route path = '/comserve' component = {ComServe}/>
			<Route path = '/members' component = {Members}/>
			<Route path = '/sponsors'component = {Sponsors}/> 
			<Route path = '/exec' component = {Exec}/> 
			<Route path = '/contact' component = {ContactUs}/> 
			<Route path = '/events' component = {Events}/> 
			<Route path = '/donate' component = {() => (window.location.href = "https://giving.mit.edu/form?fundId=2720176")}/> 
	</div>
)

export default App;
