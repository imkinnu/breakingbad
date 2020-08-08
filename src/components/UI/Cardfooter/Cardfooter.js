import React, { Component } from 'react';

class Cardfooter extends Component {
    render() {

        const { className, children } = this.props;

        return (
            <div className={"card-header " + className}>
                {children}
            </div>
        )
    }
}

export default Cardfooter;