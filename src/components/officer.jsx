import React, { Component } from 'react';
import Avatar from './avatar';

// reference: https://codepen.io/selenacarmooshe/pen/oLgPJq

export default class MainPanel extends Component {

    generateMailTo() {
        let kerb = this.props.info.email
        let name = this.props.info.name

        return `mailto:${kerb}?subject=Hi%20${name},%20 I'd like to connect`
    }

    render() {
      var info = this.props.info;

      if (!info) return null;
        return (
            <div className="team-member">
                <div className="team-member-portrait">
                    <Avatar
                        image={info.imageLink}
                        width={300}
                        height={300}
                    />
                </div>
                <div className="team-member-text">
                    <h1>{info.name}</h1>
                    <h3>{info.position} | {info.year}</h3>
                    <ul>
                        <li><a target="_blank" href={"mailto:"+info.email}>Email</a></li>
                        <li><a target="_blank" href={info.link}>LinkedIn</a></li>
                    </ul>
                    
                    
                </div>
            </div>
        )
    }
}
