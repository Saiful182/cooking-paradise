import React from 'react';
import { Card } from 'react-bootstrap';
import './HappyFaces.css'


const HappyFaces = (props) => {

    const { happyStudent } = props.service;
    return (

        <div >
            <Card >

                <Card.Body>
                    <Card.Title>{happyStudent.name}</Card.Title>
                    <Card.Img className="student-image" variant="top" src={happyStudent.img} />
                    <Card.Text>
                        {happyStudent.comment}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default HappyFaces;