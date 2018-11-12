import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBeer, faCoffee, faWineGlassAlt, faStroopwafel, faAppleAlt, faCookie, faCheckSquare as fasCheckSquare} from '@fortawesome/free-solid-svg-icons'
import { faSquare as farSquare, faCheckSquare as farCheckSquare, faCreditCard as farCreditCard } from '@fortawesome/free-regular-svg-icons'

library.add(
  fab,
  farSquare,
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faStroopwafel,
  faAppleAlt,
  faCookie,
  fasCheckSquare,
  farCheckSquare,
  farCreditCard
)

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
