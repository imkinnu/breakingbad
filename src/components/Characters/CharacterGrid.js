import React from 'react';
import CharacterItem from './CharacterItem';
import Col from './../UI/Col/Col';

const CharacterGrid = ({ items, isLoading, setSingleItem }) => {
    return isLoading ? (<h1>Loading</h1>) : (
        items.map(item => {
            return (
                <Col className="lg-3 mb-2">
                    <CharacterItem key={item.char_id} item={item} onClick={(value) => setSingleItem(value)} />
                </Col>
            )
        })
    )
}

export default CharacterGrid
