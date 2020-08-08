import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Row from './../UI/Row/Row';
import Col from './../UI/Col/Col';
import Card from './../UI/Card/Card';
import Cardheader from './../UI/Cardheader/Cardheader';
import Cardbody from './../UI/Card/Cardbody/Cardbody';
import Image from './../UI/Image/Image'

const Deaths = () => {

    const [deaths, setDeaths] = useState([]);

    useEffect(() => {
        const getDeaths = async () => {
            const result = await axios('https://breakingbadapi.com/api/deaths');
            setDeaths(result.data);
        }
        getDeaths();
    })

    return (
        <Col className="lg-9 vh-90 overflow-auto">
            {deaths.map(item => {
                return (
                    <Card className="mt-2 h-25">
                        <Cardheader className="bg-dark text-white" >
                            {item.death}
                        </Cardheader>
                        <Cardbody className="">
                            <Row className="">
                                <Col className="lg-6 d-flex align-items-center">
                                    <h6>{"Reason : " + item.cause}</h6>
                                </Col>
                                <Col className="lg-6 d-flex align-items-center">
                                    <h6>{"Last Words :" + item.last_words}</h6>
                                </Col>
                            </Row>
                        </Cardbody>
                    </Card>
                )
            })}
        </Col >
    )
}

export default Deaths
