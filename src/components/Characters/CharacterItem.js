import React from 'react'
import Image from './../UI/Image/Image'
import Card from './../UI/Card/Card';
import Cardbody from './../UI/Card/Cardbody/Cardbody';
import Cardheader from './../UI/Cardheader/Cardheader';

const CharacterItem = ({ item, onClick }) => {

    const updateSingleItem = () => {
        onClick(item);
    }
    return (
        <a data-toggle="modal" data-target=".bd-example-modal-lg" href="#!" onClick={(item) => updateSingleItem(item)}>
            <Card className="h-100 mb-3" href="" >
                <Cardheader className="bg-dark text-white">{item.name}</Cardheader>
                <Cardbody>
                    <Image className="card-img-top" source={item.img} alt={item.name} height="225px" width="200px" />
                </Cardbody>
            </Card>
        </a>
    )
}

export default CharacterItem
