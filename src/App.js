import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './views/Home';
import Register from './views/Register';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? ( <Home/>) : (<Register/>)}
      </div>
    );    
  }
}

 export default App;