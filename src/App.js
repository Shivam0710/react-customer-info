import React, { Component } from 'react';
import Header from './components/header'
import Customers from './components/Customers'
import "./App.css";


class App extends Component {
render (){
    return (
      <div className="app">
        <Header/>
        <hr/>
        <Customers />
      </div>
    );
  }
}

export default App;
