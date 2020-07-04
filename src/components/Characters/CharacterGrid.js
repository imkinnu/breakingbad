import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading, setSingleItem }) => {
    return isLoading ? (<h1>Loading</h1>) : (<section className="cards">
        {items.map(item => {
            return (
                <CharacterItem key={item.char_id} item={item} onClick={(value) => setSingleItem(value)} />
            )
        })}
    </section>)
}

export default CharacterGrid
