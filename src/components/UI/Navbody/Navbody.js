import React, { Component } from 'react';
import About from './../Tabpanes/About/About'
import Projects from './../Tabpanes/Projects/Projects'
import Skills from './../Tabpanes/Skills/Skills';
import Contact from './../Tabpanes/Contact/Contact';

class Navbody extends Component {
    render() {
        const { id } = this.props;
        return (
            <div class="tab-content" id={id}>
                <About className="tab-pane active" id="v-pills-about" role="tabpanel" />
                <Projects className="tab-pane" id="v-pills-projects" role="tabpanel" />
                <Skills className="tab-pane" id="v-pills-skills" role="tabpanel" />
                <Contact className="tab-pane" id="v-pills-contact" role="tabpanel" />
            </div>)
    }
}

export default Navbody;