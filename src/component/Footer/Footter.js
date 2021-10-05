import React from 'react';
import './Footer.css';
import logo from '../../images/logo/logo.png'

const Footer = () => {
    return (
        <div className="footer-area">
            <h3>Many People choosed us to develop their cooking skills.So why are you waiting for?</h3>

            <img className="logo" src={logo} alt="" />
            <h4>Cooking Paradise</h4>

            <p>&copy; All right reseve to Saiful Islam </p>
        </div>
    );
};

export default Footer;