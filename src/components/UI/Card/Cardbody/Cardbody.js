import React, { Component } from 'react';

class Cardbody extends Component {
    render() {

        const { className, children } = this.props;
        return (
            <div className={"card-body " + className}>
                {children}
            </div>
        )
    }
}

export default Cardbody;