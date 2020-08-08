import React from 'react';

const col = (props) => {

    const { className, children } = props;
    return (
        <div className={"col-" + className} >
            {children}
        </div>
    )
}

export default col;