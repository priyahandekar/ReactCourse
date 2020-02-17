import React, {Component} from 'react';
import './App.css';

class ReactRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Welcome to React',
            contentText: 'In this lecture, we will learn about React Routers'
        }
    }
    render() {
        return (
            <div className="App">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
        )
    }
}

export default ReactRouter;

