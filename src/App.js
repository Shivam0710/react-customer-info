import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Customers from './components/Customers'
import { Customer } from './components/Customer'
import "./App.css";


class App extends Component {
render (){
    return (
      <Router>
        <div className="app">
          <Header/>
          <hr/>
          <Switch>
            <Route path="/customer/:customerId">
              <Customer />
            </Route>
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
