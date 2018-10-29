import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    const logo = (
      <li id="logo"><Link to="/">React Techniques</Link></li>
    )

    return (
      <header className="App-header">
        <navbar className="main-nav">
          <ul>
            {logo}
            <li><Link to="/buttons"> Buttons</Link></li>
            <li><Link to="/forms"> Forms</Link></li>
          </ul>

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </navbar>
      </header>
    )
  }
}

export default Navigation;
