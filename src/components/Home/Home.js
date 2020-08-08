import React from 'react';
import Col from './../UI/Col/Col';
import Card from './../UI/Card/Card';
import Cardheader from './../UI/Cardheader/Cardheader';
import Cardbody from './../UI/Card/Cardbody/Cardbody';

const Home = () => {
    return (
        <Col className="lg-9">
            <Card className="vh-90 overflow-auto mb-5">
                <Cardheader className="bg-dark text-white" >
                    <h6>Home</h6>
                </Cardheader>
                <Cardbody>
                    <h6>Breaking bad is one of my favourite Shows of all time and Walter White Role has Incfluenced me a lot.</h6>
                </Cardbody>
            </Card>
        </Col>
    )
}

export default Home;

