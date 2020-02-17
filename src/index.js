import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import './index.css';
//import App from './App';
//import LifeCycle from './LifeCycle';
//import ReactForms from './reactForms';
import ReactRouter from './ReactRouter';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App header="Props from the header..." content="Props from the content..."/>, document.getElementById('root'));
//ReactDOM.render(<ReactRouter />, document.getElementById('root'));

//Componet will unmount example, after 10 sec component will unmount.
// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 10000)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(
    <Router history = {browserHistory}>
        <Route path="/" component = {ReactRouter}></Route>
    </Router>, document.getElementById('root'));

serviceWorker.unregister();
