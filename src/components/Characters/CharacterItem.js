import React from 'react'

const CharacterItem = ({ item, onClick }) => {

    const updateSingleItem = () => {
        onClick(item);
    }


    return (
        <a href="#openModal-about">
            <div className='card' href="" onClick={(item) => updateSingleItem(item)}>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={item.img} alt='' />
                    </div>
                    <div className='card-back'>
                        <h1>{item.name}</h1>
                        <ul>
                            <li>
                                <strong>Actor Name:</strong> {item.portrayed}
                            </li>
                            <li>
                                <strong>Nickname:</strong> {item.nickname}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {item.birthday}
                            </li>
                            <li>
                                <strong>Status:</strong> {item.status}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default CharacterItem
