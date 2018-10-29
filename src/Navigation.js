import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

const logoStyle = {
  color: "tomato",
  textDecoration: "none",
};
const linkStyle = {
  padding: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  color: "white"
};
const activeLinks = {
  color: "green"
};

const Navigation = () =>
  <header className="App-header">
    <navbar className="main-nav">
      <ul>
        <NavLink
          exact to="/"
          id="logo"
          style={logoStyle}
        >
          React Techniques
        </NavLink>
        <NavLink
          to="/buttons"
          style={linkStyle}
          activeStyle={activeLinks}
        >
          Buttons
        </NavLink>
        <NavLink
          to="/forms"
          style={linkStyle}
          activeStyle={activeLinks}
        >
          Forms
        </NavLink>
      </ul>

      {/* <NavLink
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </NavLink> */}
    </navbar>
  </header>


export default Navigation;
