import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation.js';
import Home from './Home.js';
import Buttons from './Buttons.js';
import Forms from './Forms.js';

class Routes extends React.Component {
  render(){
    return(
      <div className="wrapper App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/buttons" component={Buttons}/>
          <Route exact path="/forms" component={Forms}/>
        </Switch>
      </div>
    )
  }
}

export default Routes;
