import React from 'react';

const hr = (props) => {
    const { height, margin, width, className } = props;

    return (
        <hr className={className} height={height} />
    );
}

export default hr;
