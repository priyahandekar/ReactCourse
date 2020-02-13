import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
       <Header header={this.state.headerText} />
       <Content content={this.state.contentText} />
       {/* <Clock /> */}
       {this.props.header}
       {this.props.content}
          <h4 style = {myStyle}>Hello World!</h4>
          <p>{i==1 ? 'true' : 'false'}</p>
      </div>
    );
  }
}
 //setting default props
//  App.defaultProps = {
//    header: "default foy header...",
//    content: "default for content..."
//  }
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
      data: [],
      count: 0
    //   data: [
    //     {
    //     id: 1,
    //     name: 'pankaj',
    //     age: 30
    //   },
    //   {
    //     id: 2,
    //     name: 'ausaf',
    //     age: 28
    //   },
    //   {
    //     id: 3,
    //     name: 'priya',
    //     age: 26
    //   }
    // ]
      
    };
  }

  updateMyState = () => {
    var counter = this.state.count;
    counter++;
     var item = 'Count - '+ counter;
    // var myArray = this.state.data;
    // myArray.push(item);
    this.setState((prevState) => ({
      data: [...this.state.data, item],
      count: prevState.count + 1
    }))
  }
  render(){
    return (
      <div className="App-intro">
        <h1>Components API!</h1>
        <p>In the lecture, we will go through components api</p>
        <button onClick={this.updateMyState}>Click me</button>
        <h4>State Data: {this.state.data}</h4>

    {/* <table>
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
    {this.props.content}
      <div>
        <h4>Array: {this.props.propArray}</h4>
        <h4>Boolean: {this.props.propBoolean ? "True" : "False" }</h4>
        <h4>Function: {this.props.propFunc(5)}</h4>
        <h4>Number: {this.props.propNumber}</h4>
        <h4>String: {this.props.propString}</h4>
        <h4>Object: {this.props.propObject.objectName1}</h4>
        <h4>Object: {this.props.propObject.objectName2}</h4>
        <h4>Object: {this.props.propObject.objectName3}</h4>
      </div> */}
    </div>
    ); 
  }
}

Content.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBoolean: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4,5],
  propBoolean: true,
  propFunc: function(e) {return e},
  propNumber: 1,
  propString: "String value coming...",
  propObject: {
    objectName1: 'value1',
    objectName2: 'value2',
    objectName3: 'value3'
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
