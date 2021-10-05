import { contains } from 'dom-helpers';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HappyFaces from '../HappyFaces/HappyFaces';
import TopServices from '../TopServices/TopServices';
import './MainSection.css';
import '../../generated.json';

const MainSection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../generated.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);
    const fourServices = services.slice(0, 4);

    return (
        <div className="main-section">

            <Container>
                <Row>
                    <Col>{
                        fourServices.map(service => <TopServices service={service} key={service.id}>

                        </TopServices>)
                    }</Col>
                    <Col>{
                        fourServices.map(service =>
                            <HappyFaces service={service.happyFaces} key={service.id}>
                            </HappyFaces>)}</Col>
                </Row>

            </Container>
        </div>
    );

};
export default MainSection;