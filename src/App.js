import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    headerText: 'Welcome to React',
    contentText: 'In this lecture, we will learn about Components'
  }
}
  render(){
    var i = 1;
    var myStyle = {
      fontSize: 50,
      color: 'green'
    }
    return (
      <div className="App">
        {/* <h2>{this.state.headerText}</h2>
        <h2>{this.state/contentText}</h2> */}
       <Header />
       <Content />
       <Clock />
          <h4 style = {myStyle}>Hello World!</h4>
          <p>{i==1 ? 'true' : 'false'}</p>
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      comment: 'Hello'
    }
  }
  componentDidMount() {
    this.timerId = setInterval(
      () => {this.tick()}, 1000
    )
  }
  
  tick() {
    this.setState({
      date: new Date(),
      // comment: this.state.comment + 'guys'
    });
  }
  componentWillUnmount() {
      clearInterval(this.timerId)
  }
  render() {
    return (
      <div>
        <h2>The Time is: {this.state.date.toLocaleTimeString()} </h2>
        {/* <p>{this.state.comment}</p> */}
      </div>
    )
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
        id: 1,
        name: 'pankaj',
        age: 30
      },
      {
        id: 2,
        name: 'ausaf',
        age: 28
      },
      {
        id: 3,
        name: 'priya',
        age: 26
      }
    ]
      
    }
  }
  render(){
    return (
      <p>
      <h1>What is JSX!</h1>
     In this lecture, we will learn JSX tags <code>src/App.js</code> and save to reload.
    
    <table>
      <thead>
        <th>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
        </th>
      </thead>
      <tbody>
        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
      </tbody>
    </table>
    </p>
    );
  }
}

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    )
  }
} 

export default App;
