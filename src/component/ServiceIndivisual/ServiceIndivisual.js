

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ServiceIndivisual.css'


const ServiceIndivisual = (props) => {
    const { name, img, price, totalEnrooled, ratting } = props.service;
    return (

        <div>

            <Card>
                <Card.Img className="card-image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text> Total Enrolled: {totalEnrooled}</Card.Text>
                </Card.Body>
                <Button variant="primary" >Click to Enroll</Button>
            </Card>
        </div>


    );
};

export default ServiceIndivisual;