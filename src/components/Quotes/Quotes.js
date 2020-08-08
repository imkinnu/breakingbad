import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from './../UI/Row/Row';
import Col from './../UI/Col/Col';
import Card from './../UI/Card/Card';
import Cardheader from './../UI/Cardheader/Cardheader';
import Cardbody from './../UI/Card/Cardbody/Cardbody';
import Image from './../UI/Image/Image'

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getQuotes = async () => {
            const result = await axios('https://breakingbadapi.com/api/quotes');
            setQuotes(result.data);
        }
        const getCharacters = async () => {
            const result = await axios('https://breakingbadapi.com/api/characters');
            setCharacters(result.data);
        }
        getQuotes();
        getCharacters();
    }, [])

    return (
        <Col className="lg-9 vh-90 overflow-auto">
            {quotes.map(item => {
                return (
                    <Card className="mt-2 h-25">
                        <Cardheader className="bg-dark text-white" >
                            {item.author}
                        </Cardheader>
                        <Cardbody className="">
                            <Row className="">
                                <Col className="lg-4">
                                    {characters.map(ch => {
                                        if (item.author === ch.name) {
                                            return (<Image source={ch.img} height="75px" width="90px" alt="Logo" />)
                                        }
                                    })}
                                </Col>
                                <Col className="lg-8 d-flex align-items-center">
                                    <h6>{item.quote}</h6>
                                </Col>
                            </Row>
                        </Cardbody>
                    </Card>
                )
            })}
        </Col >
    )
}

export default Quotes
