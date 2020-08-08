import React from 'react';

const row = (props) => {
    const { className, children } = props;
    return (
        <div className={"row " + className} >
            {children}
        </div>
    )
}

export default row;