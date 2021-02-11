import React, { Component } from 'react';

export default class Member extends Component {

    render() {
      var info = this.props.info;

      if (!info) return null;
        return (
            <div className="member">
                <h1>{info.name}</h1>
                <h3>{info.course} - {info.year}</h3>
                <a target="_blank" href={"mailto:"+info.email}>Email</a>
                {info.resume? <a target="_blank" href={info.link}>Resume</a> : null}
                {info.link? <a target="_blank" href={info.link}>LinkedIn</a> : null}
                {info.web? <a target="_blank" href={info.link}>Website</a> : null}
            </div>
        )
    }
}
