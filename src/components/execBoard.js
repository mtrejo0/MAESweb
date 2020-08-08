import React from 'react'
import exec from '../exec.json'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

class ExecBoard extends React.Component {

    render() {
        return(
            <div>
                <CardColumns>
                {exec.map( execMember => {
                    return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={execMember.img} />
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
