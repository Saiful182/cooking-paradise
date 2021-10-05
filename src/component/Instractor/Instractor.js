import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Instractor.css';

const Instractor = (props) => {
    const { img, name, position } = props.instractor;
    return (

        <Col>
            <Card className="card-class">
                <Card.Img className="instractor-image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{position}</Card.Text>


                </Card.Body>
            </Card>
        </Col>
    );
};

export default Instractor;