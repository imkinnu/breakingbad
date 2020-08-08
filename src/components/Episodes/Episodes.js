import React, { useState, useEffect } from 'react'
import Col from './../UI/Col/Col';
import Card from './../UI/Card/Card';
import Cardheader from './../UI/Cardheader/Cardheader';
import Cardbody from './../UI/Card/Cardbody/Cardbody';
import Row from './../UI/Row/Row';
import axios from 'axios';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        const getEpisodes = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/episodes`)
            setEpisodes(result.data);
            console.log(episodes)
        }
        getEpisodes();
    }, [episodes])

    return (
        <Col className="lg-9 vh-90 overflow-auto">
            <Row className="">
                {episodes.map(item => {
                    return (
                        <Col className="lg-4">
                            <Card className="mt-2 h-95">
                                <Cardheader className="bg-dark text-white" >
                                    <h6>{item.episode_id + " ) " + item.title}</h6>
                                </Cardheader>
                                <Cardbody className="">
                                    <h6>{'Season' + item.season}</h6>
                                    <h6>{'Relase Date ' + item.air_date}</h6>
                                    {item.characters.map(character => {
                                        return (<h6>{character}</h6>)
                                    })}
                                </Cardbody>
                            </Card>
                        </Col>

                    )
                })}
            </Row>
        </Col >
    )
}

export default Episodes
