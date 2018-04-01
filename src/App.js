import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo from './ether4.png';
import './App.css';


var page_number = "1";

class RedBox extends React.Component {
  render() {
    return (
      <div className="red-box" style={divStyle.box1}>
        <div>Hello World!</div>
      </div>
    );
  }
}

class BlueBox extends React.Component {
  render() {
    return (
      <div className="blue-box" style={divStyle.box2}>
        <div>Yo World!</div>
      </div>
    );
  }
}


class Banner extends React.Component {
  render() {
    return (
      <div style={{ height: '10%' }}>
        <img src={logo} alt="logo" style={{maxWidth: '100%'}}/>
      </div>
    );
  }
}

function AllTogether(props) {
  const pagenumber = props.page;
  if (pagenumber == 1) {
    return <div>
            <RedBox />
          </div>;
  }
  else {
    return <div>
            <BlueBox />
          </div>;
  }

}

const divStyle = {
  box1: {
  color: 'blue',
  height: '10%',
  background: 'red',
  },
  box2: {
  color: 'blue',
  height: '10%',
  background: 'blue',
  },
};

class Navigation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {page: 1};
  }

  handleSelect(eventKey){
    console.log(eventKey);
    if (eventKey === 1) {
      this.setState({
        page: 1
      });
    }
    else if (eventKey === 2) {
      this.setState({
        page: 2
      });
    }
    else {
      this.setState({
        page: 3
      });
    }

  {/*}  this.forceUpdate();*/}

  };

  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav onSelect={this.handleSelect.bind(this)}>
            <NavItem eventKey={1}>Home</NavItem>
            <NavItem eventKey={2}>Example</NavItem>
            <NavItem eventKey={3}>Tools</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
         <h4>Random Number : { Math.random() }</h4>
         <h2>It is {this.state.page}.</h2>
         <AllTogether page={this.state.page}/>
         </div>
    );
  }
}

class App extends Component {

  render() {
    return (
        <div>
          <Navigation/>
        </div>
    );
  }
}




export default App;
