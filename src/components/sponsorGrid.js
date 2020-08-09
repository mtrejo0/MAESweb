import React from 'react'
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";


let sponsors = [
    {
        "name":"Capital One",
        'img':"https://1000logos.net/wp-content/uploads/2018/08/capital-one-logo-768x432.png",
        "apply": "https://campus.capitalone.com/internships"
    },
    {
        "name":"Goldman Sachs",
        'img':"https://1000logos.net/wp-content/uploads/2016/12/Goldman-Sachs-Logo-768x768.png",
        "apply": "https://www.goldmansachs.com/careers/students/programs/"
    },
    {
        "name":"Bloomberg",
        'img':"https://1000logos.net/wp-content/uploads/2017/08/Bloomberg-Logo-768x230.png",
        "apply": "https://www.bloomberg.com/company/early-career/"
    },
    {
        "name":"Google",
        'img':"https://1000logos.net/wp-content/uploads/2016/11/Google-Logo.png",
        "apply": "https://careers.google.com/students/"
    },
    {
        "name":"DE Shaw",
        'img':"https://www.deshaw.com/assets/images/logo/DESCO_Logo.jpg",
        "apply": "https://www.deshaw.com/careers/internships"
    },
    {
        "name":"Boeing",
        'img':"https://1000logos.net/wp-content/uploads/2016/10/Boeing-Logo.png",
        "apply": "https://jobs.boeing.com/internships"
    },
    {
        "name":"Facebook",
        'img':"https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-768x768.png",
        "apply": "https://www.facebook.com/careers/students-and-grads/?p[teams][0]=Internship%20-%20Engineering%2C%20Tech%20%26%20Design&p[teams][1]=Internship%20-%20Business&p[teams][2]=Internship%20-%20PhD&p[teams][3]=University%20Grad%20-%20PhD%20%26%20Postdoc&p[teams][4]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&p[teams][5]=University%20Grad%20-%20Business&teams[0]=Internship%20-%20Engineering%2C%20Tech%20%26%20Design&teams[1]=Internship%20-%20Business&teams[2]=Internship%20-%20PhD&teams[3]=University%20Grad%20-%20PhD%20%26%20Postdoc&teams[4]=University%20Grad%20-%20Engineering%2C%20Tech%20%26%20Design&teams[5]=University%20Grad%20-%20Business"
    },
]

class SponsorGrid extends React.Component {
    render() {
        return(
            <div>
                <CardColumns>
                {sponsors.map(sponsor => {
                    return (
                            <Card style={{ width: '25em' }}>
                                <Card.Img variant="top" src={sponsor.img} style={{padding:"32px"}}/>
                                <Card.Body>
                                    <Card.Title><h1>{sponsor.name}</h1></Card.Title>
                                </Card.Body>
                                <div style={{marginBottom:"32px"}}>
                                    <Button variant="link" href={sponsor.apply}>Apply Today!</Button>
                                </div>
                            </Card>
                        );
                })}
                </CardColumns>
            </div>
        )
    }
}
export default SponsorGrid;
