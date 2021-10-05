import React, { useEffect, useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import '../../sheff.json';
import Instractor from '../Instractor/Instractor';
import './Instractors.css';
import image from '../../images/Sheff/Founder.jpg';

const Instractors = () => {
    const [intractors, setInstractors] = useState([]);
    useEffect(() => {
        fetch('../../sheff.json')
            .then(res => res.json())
            .then(data => setInstractors(data))

    }, [])
    return (
        <div>
            <div className="founder-card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Saiful Islam</Card.Title>
                        <Card.Text>
                            Founder of COOKING PARADISE
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            <Row xs={2} md={3} className="g-4">

                {
                    intractors.map(instractor =>
                        <Instractor instractor={instractor} key={instractor.id}></Instractor>)

                }
            </Row>

        </div>

    );
};

export default Instractors;