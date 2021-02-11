import React, { Component } from 'react';
import information from '../information/members_2020.json'
import Member from '../components/member';
import '../styles/members.css';

export default class Members extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
        }
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            members: this.loadOfficers()
        })
    }

    loadOfficers() {
        let members = []

        information.forEach((member) => {
            // officer = [photo (kerberos), name, position, email, year, major, bio]
            var photolink = process.env.PUBLIC_URL + `headshots/${member.img}.jpg`;
            // oo == officer object
            member.imageLink = photolink
            
            members.push(member);
        })

        return members;
    }

    render() {

        return (
            <div className="wrapper">
                <h1>MAES Members Page Coming Soon!</h1>
                <h1>Fill this <a href="https://forms.gle/iACN5r1ZvZzbEdTz7" target="_blank" rel="noopener noreferrer">form</a> to be added! </h1>
                <h1>Message <a href="mailto:moises@mit.edu" target="_blank">Moises Trejo</a> for more info </h1>
                <div className="members">
                    {
                        this.state.members.map( i => <Member key={i.name} info={i}></Member>)
                    }
                </div>
                
            </div>
        )
    }
}
