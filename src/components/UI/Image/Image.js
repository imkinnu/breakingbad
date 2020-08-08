import React from 'react';

const Image = (props) => {
    const { name, source, height, width, className } = props;
    return (
        <img src={source} alt={name} height={height} width={width} className={className} />
    )
}

export default Image;