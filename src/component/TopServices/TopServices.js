import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TopService.css'

const TopServices = (props) => {

    const { name, img, price, totalEnrooled, ratting } = props.service;
    return (
        <div className="service-container">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TopServices;