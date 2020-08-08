import React, { Component } from 'react';

class Cardheader extends Component {
    render() {

        const { className, children } = this.props;
        return (
            <div className={"card-header " + className}>
                {children}
            </div>
        )
    }
}

export default Cardheader;