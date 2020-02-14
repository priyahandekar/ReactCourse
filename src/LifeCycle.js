import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class LifeCycle extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        )
    }
}

class Header extends Component {
    render(){
      return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.props.header}
        </div>
      );
    }
}

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 0
        };
    }

    setNewNumber = () => {
        this.setState((prevState) => ({
            data: prevState.data + 1
        }))
    }

    render(){
      return (
        <div className="App-intro">
         <h1>Components Life Cycle!</h1>
         <p>In this lecture, we will go through Component's life Cycle</p>
         <button onClick = {this.setNewNumber}>Update Number</button>
         <NumberComponent myNUmber = {this.state.data}/>
        </div>
      );
    }
}

class NumberComponent extends Component {
    componentWillMount() {
        console.log('called the component will mount');
    }

    componentDidMount() {
        console.log('called the component did mount');
    }

    componentWillReceiveProps(newProps) {
        console.log('called the component will receive props');
    }

    shouldComponentUpdate(newProps, nextState) {
        console.log('called the component should update');
        return true;
    }

    componentWillUpdate(newProps, nextState) {
        console.log('called the component will update');
    }

    componentDidUpdate(newProps, nextState) {
        console.log('called the component did update');
    }

    componentWillUnmount(newProps, nextState) {
        console.log('called the component WILL Unmount');
    }

    render(){
      return (
        <h4>
            {this.props.myNUmber}
        </h4>
      );
    }
}

export default LifeCycle;

