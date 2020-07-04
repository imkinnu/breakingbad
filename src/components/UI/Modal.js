import React from 'react'

const Modal = ({ item }) => {
    return (
        <div id="openModal-about" class="modalDialog">
            <div style={{ display: "flex" }}>
                <a href="#close" title="Close" class="close">X</a>
                <img src={item.img} alt={item.name} />
                <span>
                    <h4 style={{ padding: "10px 10px" }}>Name : {item.name}</h4>
                    <h4 style={{ padding: "10px 10px" }}>Birthday : {(item.birthday)}</h4>
                    <h4 style={{ padding: "10px 10px" }}>Status: {(item.status)}</h4>
                    <h4 style={{ padding: "10px 10px" }}>Nickname : {(item.nickname)}</h4>
                    <h4 style={{ padding: "10px 10px" }}>Actor Name : {(item.portrayed)}</h4>
                    <h4 style={{ padding: "10px 10px" }}>Category : {(item.category)}</h4>
                </span>
            </div>
        </div >
    )
}

export default Modal
