import React from 'react'

const MainWrapper = (props) => {
    return (
        <div class="d-flex bg-wrapper vh-100">
            {props.children}
        </div>
    )
}

export default MainWrapper
