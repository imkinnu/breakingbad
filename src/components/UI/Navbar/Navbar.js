import React, { Component } from 'react';

class Navbar extends Component {

    state = {
        "menuoptions": [
            {
                "name": "ABOUT",
                "content": "Content"
            },
            {
                "name": "PROJECTS",
                "content": "Projects"
            },
            {
                "name": "SKILLS",
                "content": "Skills"
            },
            {
                "name": "CONTACT",
                "content": "Contact"
            }
        ]
    }
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                    {this.props.children}
                </nav>
            </div>
        )
    }
}

export default Navbar;