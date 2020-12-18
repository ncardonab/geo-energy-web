import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class NavBar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="NavbarItems">
        <h4 className="navbar-logo">Home</h4>
        <div className="menu-icon" onClick={this.handleClick}>
          <div
            className={`line line-1 ${this.state.clicked ? "active" : ""}`}
          ></div>
          <div
            className={`line line-2 ${this.state.clicked ? "active" : ""}`}
          ></div>
          <div
            className={`line line-3 ${this.state.clicked ? "active" : ""}`}
          ></div>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NavBar;
