import React, { Component } from 'react';

import '../styles/contact.css';

export default class Header extends Component {
    render() {
        return (
            <div className="section">
                <h3>Contact us!</h3>
                <p>MAES welcomes any opportunity that can help further the careers of our engineers. If you are a company/organization that has infromation our members can benefit from please feel free to reach out!</p>

                <p><a href="https://forms.gle/LyVbRRHkK99kW3UK8" target="_blank" rel="noopener noreferrer">Sign Up</a> for our mailing list with your mit.edu email! </p>
				<p>Like our <a href="https://www.facebook.com/maesatmit" target="_blank" rel="noopener noreferrer">Facebook Page</a> for updates! </p>
                <p>Follow us on <a href="https://www.instagram.com/maes_mit" target="_blank" rel="noopener noreferrer">Instagram!</a></p>
                

                <p>Send us an email! <a href="mailto:maes-exec@mit.edu" target="_blank" rel="noopener noreferrer">maes-exec@mit.edu</a> </p>

            </div>
        )
    }
}
