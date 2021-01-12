import React, { Component } from 'react';
import information from '../information/sponsors_2020.json'
import Sponsor from '../components/sponsor';
import '../styles/sponsors.css';

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            sponsors: [],
        }
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            sponsors: this.loadSponsors()
        })

    }

    loadSponsors() {
        let sponsors = []

        information.information.forEach((sponsor) => {
            // sponsor = [photo (name), name, blurb]
            var photolink = process.env.PUBLIC_URL + `sponsorLogos/${sponsor.img}.jpeg`;
            // s == sponsor object
            var s = {};
            s.photo = photolink
            s.name = sponsor.name
            s.link = sponsor.link

            sponsors.push(s);
        })

        return sponsors;
    }

    getPhotoLink(name) {
        let link = "./sponsorLogos/"
        link.concat(name)
        link.concat('.png')
        // console.log(link)
        return link;
    }

    render() {

        return (
            <div className="sponsors">
                <h2>Sponsors 2020 - 2021</h2>
                {
                    this.state.sponsors.map(i => {
                        return <Sponsor key={i.name} info={i}/>;    
                    })
                }
            </div>
        )
    }


}
