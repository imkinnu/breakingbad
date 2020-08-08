import React, { Component } from 'react';

class Card extends Component {
    render() {

        const { className, children } = this.props;

        return (
            <div className={"card " + className}>
                {children}
            </div>
        )
    }
}

export default Card;