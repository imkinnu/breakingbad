import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Characters from './../../Characters/Character';
import Episodes from './../../Episodes/Episodes';

const Sidebar = ({ items }) => {
    return (
        <Router>
            <div className="list-group navbarResponsive">
                {items.map(item => {
                    return (
                        <Link to={"/" + item} href="#!" className="list-group-item bg-dark text-white" >{item.toUpperCase()}</Link >
                    )
                })}
            </div >
            <Route path="/characters" exact strict component={Characters} />
            <Route path="/episodes" exact strict component={Episodes} />
        </Router>
    )
}

export default Sidebar
