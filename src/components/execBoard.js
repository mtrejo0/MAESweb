import React from 'react'
import exec from '../exec.json'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import moises from '../assets/moi.jpg'
import juan from '../assets/juan.jpg'
import guillermo from '../assets/guillermo.jpg'
import marvin from '../assets/marvin.jpg'
import leonardo from '../assets/leonardo.jpg'
import jesusL from '../assets/jesus.jpg'
import jesusR from '../assets/jesusRod.jpg'

let images = {
    'moises' : moises,
    'juan': juan,
    'guillermo': guillermo,
    "marvin": marvin,
    'leonardo': leonardo,
    'jesusL' : jesusL,
    'jesusR' : jesusR
}

class ExecBoard extends React.Component {
//refer to the exec.json that contains exec member info
    render() {
        return(
            <div>
                <CardColumns>
                {exec.map( execMember => {
                    return (
                            <Card style={{ width: '25em' }}>
                                <Card.Img variant="top" src={ images[execMember.img]}/>
                                <Card.Body>
                                    <Card.Title>{execMember.name}</Card.Title>
                                    <Card.Text>
                                        <p>{execMember.position}</p>
                                        <p> Class of {execMember.year}</p>
                                        <p>{execMember.course}</p>
                                    </Card.Text>
                                    <div>
                                        <Button variant="success" href = {"mailto:"+execMember.email}>Email</Button>{'  '}
                                        <Button variant="primary" href={execMember.link}>LinkedIn</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        );
                })}
                </CardColumns>
            </div>
        )
    }
}
export default ExecBoard;
