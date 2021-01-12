import React, { Component } from 'react';
import '../styles/about.css';
import logo from '../images/MAES_logo.png'

export default class About extends Component {


    render() {
        return (
        <div className="mission">
			<div className="center">
				<img src={logo} className="logo" alt="MAES LOGO"></img>
			</div>
			
			<div className="section">
				<h3>Welcome to the MIT Chapter of MAES!</h3>
				<p>Latinos in Science and Engineering is the second largest Engineering and Professional development club at MIT. 
					We focus on the on the professional development of its individual members, offering them resources and opportunities for success.
					MAES-MIT supports its members by connecting them with corporate sponsors, building community, supporting members, and by having fun.</p>
			</div>

			<div className="section">
				<h3>Mission</h3>
				<p>
					To promote, cultivate, and honor excellence in education and leadership among Latino engineers and scientists.
				</p>

				<h3>Vision</h3>
				<p>
				MAES is the foremost Latino organization for the development of STEM leaders in the academic, executive, and technical communities.
				</p>


				<p>The MAES pipeline makes a positive impact in the Latino community through its pre-college, college, and professional programs. These programs provide critical STEM exposure to our youth and offer our members with valuable professional and leadership training that prepares them to make a positive impact in our Nation’s STEM workforce. We also provide our members with hands-on leadership experience, by providing them exciting leadership opportunities at the local and national level.

					Our entire pipeline is designed to synergistically support the achievement of our organizations objectives.</p>
			
			</div>


			<div className="section">
				<h3>Join Us!</h3>
				<p>
					We welcome new members from any background who is interested in supporting Latinx representation!
				</p>
				<p><a href="https://forms.gle/LyVbRRHkK99kW3UK8" target="_blank" rel="noopener noreferrer">Sign Up</a> for our mailing list with your mit.edu email! </p>
				<p>Like our <a href="https://www.facebook.com/maesatmit" target="_blank" rel="noopener noreferrer">Facebook Page</a> for updates! </p>
			</div>
		</div>
        )
    }
}
