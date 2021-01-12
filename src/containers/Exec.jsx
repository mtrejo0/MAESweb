import React, { Component } from 'react';
import information from '../information/officers_2020.json'
import Officer from '../components/officer';
import '../styles/exec.css';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            officers: [],
        }
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            officers: this.loadOfficers()
        })
    }

    loadOfficers() {
        let officers = []

        information.forEach((officer) => {
            // officer = [photo (kerberos), name, position, email, year, major, bio]
            var photolink = process.env.PUBLIC_URL + `headshots/${officer.img}.jpg`;
            // oo == officer object
            officer.imageLink = photolink
            
            officers.push(officer);
        })

        return officers;
    }

    getPhotoLink(name) {
        let link = "./headshots/"
        link.concat(name)
        link.concat('.png')
        return link;
    }   

    render() {

        return (
            <div className="team-members">
                {
                    this.state.officers.map(i => {
                        return <Officer key={i.name} info={i}/>
                    })
                }
            </div>
        )
    }
}
