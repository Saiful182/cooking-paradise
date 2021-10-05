import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './About.css'


const About = () => {
    return (
        <div >
            <p className="paragraph-text">We are always hare to make your cooking skill to  proffesional lavel.
                Our instractors provide's 24/7 service to our student.We consider coooking is a art .Anyone can art but cont be a good artist.
                So we are the one who will make sure you will cross that level.

            </p>


            <div className="input-area">
                <h3>If you have any queiry please contact with us.</h3>

                <InputGroup className="mb-3">

                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">

                    <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup>

                    <FormControl placeholder="Type Your Text" as="textarea" aria-label=" textarea" />
                </InputGroup>
                <Button className="input-button">Submit</Button>
            </div>

        </div>
    );
};

export default About;