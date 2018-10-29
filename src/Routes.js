import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Buttons from './Buttons.js';

class Routes extends React.Component {
  render(){
    return(
      <div className="wrapper App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/buttons" component={Buttons}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
