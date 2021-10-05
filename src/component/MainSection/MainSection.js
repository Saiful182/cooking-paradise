
import React, { useEffect, useState } from 'react';

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
        <div >

            <div className="main-section">
                <div className="top-services-container">
                    <h3>Our top selling Courses</h3>
                    <div className="top-services">

                        {
                            fourServices.map(service => <TopServices service={service} key={service.id}>
                            </TopServices>)
                        }
                    </div>
                </div>
                <div className="happy-face-container">
                    <h4>They became success with our help</h4>
                    <div className="happy-Faces">
                        {
                            fourServices.map(service =>
                                < HappyFaces service={service} key={service.id} >
                                </HappyFaces>)}
                    </div>

                </div>



            </div>
        </div >
    );

};
export default MainSection;