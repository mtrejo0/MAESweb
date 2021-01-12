import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

var active = {
    fontWeight: 'bold',
    color: '#004a20'
}

var logoStyle = {
    height: '150px',
}

const Header = () => (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        {/* <img src="./logo.png" alt="nice" className="center" style={logoStyle}></img> */}
        <ul>
            <li><NavLink exact to='/' activeStyle={active} >About Us</NavLink></li>
            <li><NavLink to='/exec' activeStyle={active} >Exec Board</NavLink></li>
            <li><NavLink to='/events' activeStyle={active} >Events</NavLink></li>
            <li><NavLink to='/sponsors' activeStyle={active} >Sponsors</NavLink></li>
            <li><NavLink to='/contact' activeStyle={active} >Contact Us</NavLink></li>
            <li><a href='https://mymaes.org/' target="_blank">MAES National</a></li>
        </ul>
    </div>
)

export default Header;
