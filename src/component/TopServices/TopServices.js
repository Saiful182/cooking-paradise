import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TopService.css'

const TopServices = (props) => {

    const { name, img, price, totalEnrolled, comment, ratting } = props.service;
    return (
        <div>

            <Card>
                <Card.Img className="card-image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="card-comment">{comment}
                    </Card.Text>
                    <Card.Text> Total Enrolled: {totalEnrolled}</Card.Text>
                    <Card.Text>Rating: {ratting}</Card.Text>
                    <Card.Text> Course Price: {price}$</Card.Text>
                </Card.Body>
                <Button variant="primary" href="/service">Click to Enroll</Button>

            </Card>
        </div>
    );
};

export default TopServices;