import React,{ Component, Fragment } from "react";
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h1>Welcome!!!</h1>
                <Router>
                    <Link to="/"  className='links'>Home</Link>
                    <Link to="/aboutMe"  className='links'>About Me</Link>
                    <Link to="/projects"  className='links'>Projects</Link>
                    <Route path="/aboutMe">
                        <AboutMe/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                </Router>
            </Fragment>
         );
    }
}
 
export default AppContainer;