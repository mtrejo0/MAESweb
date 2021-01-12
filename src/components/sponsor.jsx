import React, { Component } from 'react';
import Avatar from './avatar';
import '../styles/sponsors.css';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    render() {
      var info = this.props.info;

        return (
            <div className="sponsor boxShadow">
                <div className="sponsor-portrait">
                    <Avatar
                        image={info.photo}
                    />
                </div>
                <h1>{info.name}</h1>
                <p>Full-time / Internship <a href={info.link} target="_blank" rel="noopener noreferrer">opportunities</a></p>
            </div>
        )
    }
}
