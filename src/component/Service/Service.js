
import ServiceIndivisual from '../ServiceIndivisual/ServiceIndivisual';
import React, { useEffect, useState } from 'react';
import './Service.css';
import '../../generated.json'

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../generated.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);



    return (
        <div className="service-container">
            {
                services.map(service =>
                    <ServiceIndivisual service={service} key={service.id}></ServiceIndivisual>)

            }
        </div>



    );
};

export default Service;